import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/stores';
import { Button, Modal } from 'react-bootstrap';
import { customAxiosAirflow } from '../../apis/utils';

function LogModal() {
    const dag_run_id = useSelector((state: RootState) => state.cronreducer.dag_run_id);
    const sensor_id = useSelector((state: RootState) => state.cronreducer.sensor_id);
    const task_id = useSelector((state: RootState) => state.cronreducer.task_id);
    const try_number = useSelector((state:RootState) => state.cronreducer.try_number);
    const [logContent,setLogContent] = useState<string>('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {      
      setShow(true);
    }
    useEffect(()=> {
        const LogResponse = async() =>{
        await customAxiosAirflow.get(`get?dags=dags/${sensor_id}/dagRuns/${dag_run_id}/taskInstances/${task_id}/logs/${try_number}`)
         .then(function(response){
          setLogContent(response.data.data.body.content);
         })
        }
        LogResponse();
    })
    return (
    <>
      <Button variant="success" onClick={handleShow}>
        Log Confirm
      </Button>
   
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Log</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{overflowX:"scroll"}}>
          {logContent.split("INFO - \\n--------------------------------------------------------------------------------\\n")[1] + logContent.split("INFO - \\n--------------------------------------------------------------------------------\\n")[2]}
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    
        </>
    );
}
export { LogModal }