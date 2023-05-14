import React, { useState } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../../../../_metronic/helpers'
import { FileCollection, FileCollectionInitValues as initialValues, UpdateDag, UpdateDagInitValues, } from '../SettingsModel'
import * as Yup from 'yup'
import { Field, useFormik } from 'formik'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { saveBigLeagueRES } from '../../../../../../redux/actions/actions'
import { test_REQ } from '../../../../../../redux/actions/creatorActions'
import { RootState } from '../../../../../../redux/stores/index'
import { useNavigate } from 'react-router-dom'

const profileDetailsSchema = Yup.object().shape({
    owner: Yup.string().required('owner is required'),
    sensor_id: Yup.string().required('sensor_id is required'),
    schedule_interval: Yup.string().required('schedule_interval is required'),
    trans_type: Yup.string().required('trans_type is required'),
    save_mode: Yup.string().required('save_mode is required'),
    // data_type: Yup.string().required('data_type is required'),
    file_type_list: Yup.string().required('file_type_list is required'),
    delimiter: Yup.string().required('delimiter is required'),
    local_path: Yup.string().required('local_path is required'),
    file_name: Yup.string().required('file_name is required'),
    target_conn_id: Yup.string().required('target_conn_id is required'),
    target_location: Yup.string().required('target_location is required'),
    privacy_on_off: Yup.string().required('privacy_on_off is required'),
})

const FileCollectionCreate: React.FC = () => {
    const [params, setParams] = useState<FileCollection>(initialValues);
    const [data, setData] = useState<boolean>(true);
    const [loading, setLoading] = useState(false)
    const Back = () => {
        navigate(-1);
    }
    const dataTypeChange = () => {
        setData(!data);
    }
    const formik = useFormik<FileCollection>({
        initialValues,
        validationSchema: profileDetailsSchema,
        onSubmit: (values) => {
            setLoading(true)
            setTimeout(() => {
                // values.communications.email = data.communications.email
                // values.communications.phone = data.communications.phone
                // values.allowMarketing = data.allowMarketing
                const updatedData = Object.assign(params, values)
                setParams(updatedData)
                setLoading(false)
            }, 1000)
        },
    })
    console.log(formik.values.data_type);
    const navigate = useNavigate();
    const selector = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    const [Ispaused, setIsPaused] = useState<UpdateDag>(UpdateDagInitValues);
    const Creatapi = () => {
        dispatch(test_REQ(formik.values));
        alert("등록완료");
        navigate("/dashboard");
    }
    return (
        <div className='card mb-5 mb-xl-12'>
            <div
                className='card-header border-0 cursor-pointer'
                role='button'
                data-bs-toggle='collapse'
                data-bs-target='#kt_account_profile_details'
                aria-expanded='true'
                aria-controls='kt_account_profile_details'
            >
                <div className='card-title m-0'>
                    <h3 className='fw-bolder m-0'>(파일수집)생성</h3>
                </div>
            </div>

            <div id='kt_account_profile_details' className='collapse show'>
                <form onSubmit={formik.handleSubmit} noValidate className='form'>
                    <div className='card-body border-top p-12'>

                        <div className='row mb-6'>
                            <label className='col-lg-2 col-form-label required fw-bold fs-6'>owner</label>
                            <div className='col-lg-3 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='owner'
                                    {...formik.getFieldProps('owner')}
                                />
                                {formik.touched.owner && formik.errors.owner && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.owner}</div>
                                    </div>
                                )}
                            </div>
                            <label className='col-lg-2 col-form-label required fw-bold fs-6'>sensor_id</label>
                            <div className='col-lg-3 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='sensor_id'
                                    {...formik.getFieldProps('sensor_id')}
                                />
                                {formik.touched.sensor_id && formik.errors.sensor_id && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.sensor_id}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* <div className='row mb-6'>
                        </div> */}
                        <div className='row mb-6'>
                            <label className='col-lg-2 col-form-label required fw-bold fs-6'>schedule_interval</label>
                            <div className='col-lg-3 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='schedule_interval'
                                    {...formik.getFieldProps('schedule_interval')}
                                />
                                {formik.touched.schedule_interval && formik.errors.schedule_interval && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.schedule_interval}</div>
                                    </div>
                                )}
                            </div>
                            <label className='col-lg-2 col-form-label required fw-bold fs-6'>file_type_list</label>
                            <div className='col-lg-3 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='file_type_list'

                                    {...formik.getFieldProps('file_type_list')}
                                />
                                {formik.touched.file_type_list && formik.errors.file_type_list && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.file_type_list}</div>
                                    </div>
                                )}
                            </div>
                        </div>


                        {/* <div className='row mb-6'>
                        
                        </div> */}

                        <div className='row mb-6'>
                            <label className='col-lg-2 col-form-label required fw-bold fs-6'>delimiter</label>
                            <div className='col-lg-3 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='delimiter'
                                    {...formik.getFieldProps('delimiter')}
                                />
                                {formik.touched.delimiter && formik.errors.delimiter && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.delimiter}</div>
                                    </div>
                                )}
                            </div>
                            <label className='col-lg-2 col-form-label required fw-bold fs-6'>local_path</label>
                            <div className='col-lg-3 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='local_path'
                                    {...formik.getFieldProps('local_path')}
                                />
                                {formik.touched.local_path && formik.errors.local_path && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.local_path}</div>
                                    </div>
                                )}
                            </div>
                        </div>


                        <div className='row mb-6'>
                            <label className='col-lg-2 col-form-label required fw-bold fs-6'>file_name</label>
                            <div className='col-lg-3 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='file_name'
                                    {...formik.getFieldProps('file_name')}
                                />
                                {formik.touched.file_name && formik.errors.file_name && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.file_name}</div>
                                    </div>
                                )}
                            </div>
                            <label className='col-lg-2 col-form-label required fw-bold fs-6'>target_conn_id</label>
                            <div className='col-lg-3 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='target_conn_id'
                                    {...formik.getFieldProps('target_conn_id')}
                                />
                                {formik.touched.target_conn_id && formik.errors.target_conn_id && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.target_conn_id}</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='row mb-6'>
                            <label className='col-lg-2 col-form-label required fw-bold fs-6'>target_location</label>
                            <div className='col-lg-3 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='target_location'
                                    {...formik.getFieldProps('target_location')}
                                />
                                {formik.touched.target_location && formik.errors.target_location && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.target_location}</div>
                                    </div>
                                )}
                            </div>
                            <label className='col-lg-2 col-form-label required fw-bold fs-6'>privacy_on_off</label>
                            <div className='col-lg-3 fv-row'>
                                <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid'
                                    placeholder='privacy_on_off'
                                    {...formik.getFieldProps('privacy_on_off')}
                                />
                                {formik.touched.privacy_on_off && formik.errors.privacy_on_off && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.privacy_on_off}</div>
                                    </div>
                                )}
                            </div>
                        </div>


                        <div className='row mb-6'>
                            <label className='col-lg-2 col-form-label required fw-bold fs-6'>trans_type</label>
                            <div className='col-lg-3 fv-row'>

                                파일 &ensp;<input
                                    type='radio'
                                    className='form-check-input'
                                    placeholder='trans_type'
                                    {...formik.getFieldProps('trans_type')}
                                    value='FILE'
                                /> &ensp;
                                DB &ensp;<input
                                    type='radio'
                                    className='form-check-input'
                                    placeholder='trans_type'
                                    {...formik.getFieldProps('trans_type')}
                                    value="DB"
                                />
                                {formik.touched.trans_type && formik.errors.trans_type && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.trans_type}</div>
                                    </div>
                                )}
                            </div>
                            <label className='col-lg-2 col-form-label required fw-bold fs-6'>save_mode</label>
                            <div className='col-lg-3 fv-row'>
                                파일 &ensp; <input
                                    type='radio'
                                    className='form-check-input'
                                    placeholder='save_mode'
                                    {...formik.getFieldProps('save_mode')}
                                    value="FILE"
                                /> &ensp;

                                DB &ensp; <input
                                    type='radio'
                                    className='form-check-input'
                                    placeholder='save_mode'
                                    {...formik.getFieldProps('save_mode')}
                                    value="DB"
                                /> &ensp;
                                {formik.touched.save_mode && formik.errors.save_mode && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.save_mode}</div>
                                    </div>
                                )}
                            </div>
                        </div>


                        <div className='row mb-6'>
                            <label className='col-lg-2 col-form-label required fw-bold fs-6'>data_type</label>
                            <div className='col-lg-3 fv-row'>
                                정형  &ensp; <input
                                    type='radio'
                                    className='form-check-input'
                                    placeholder='data_type'
                                    onClick={dataTypeChange}
                                    {...formik.getFieldProps('data_type')}
                                    value="structed"
                                />
                                &ensp;
                                비정형 &ensp; <input
                                    type='radio'
                                    onClick={dataTypeChange}
                                    className='form-check-input'
                                    placeholder='data_type'
                                    {...formik.getFieldProps('data_type')}
                                    value="unstructed"
                                />
                                {formik.touched.data_type && formik.errors.data_type && (
                                    <div className='fv-plugins-message-container'>
                                        <div className='fv-help-block'>{formik.errors.data_type}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}

export { FileCollectionCreate }
