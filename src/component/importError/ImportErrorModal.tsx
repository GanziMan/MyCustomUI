import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/stores';
import { Button, Modal } from 'react-bootstrap';
import { customAxiosAirflow } from '../../apis/utils';

function ImportErrorModal() {
    const import_error_id =  useSelector((state:RootState) => state.dashboardreducer.import_error_num);

    const [logContent,setLogContent] = useState<string>('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {      
      setShow(true);
    }
    useEffect(()=> {
        const LogResponse = async() =>{
        await customAxiosAirflow.get(`get?dags=importErrors/${import_error_id}`)
         .then(function(response){
            console.log(response);
          setLogContent(response.data.data.body.stack_trace);
         })
        }
        LogResponse();
    },[])
    console.log(import_error_id);
    return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Click
      </Button>
   
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error LOG</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{overflowX:"scroll"}}>
          {logContent}
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
export { ImportErrorModal }