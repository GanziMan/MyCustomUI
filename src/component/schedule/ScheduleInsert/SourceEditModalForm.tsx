import {FC,  useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import clsx from 'clsx'
import { initialUser, User } from '../../../app/modules/apps/user-management/users-list/core/_models'
import { getLayout, ILayout } from '../../../_metronic/layout/core'
import { useQueryResponse } from '../../../app/modules/apps/user-management/users-list/core/QueryResponseProvider'
import { IProfileDetails, profileDetailsInitValues as initialValues } from '../../../app/modules/accounts/components/settings/SettingsModel'
import { createUser, updateUser } from '../../../app/modules/apps/user-management/users-list/core/_requests'
import { useListView } from '../../../app/modules/apps/user-management/users-list/core/ListViewProvider'
import { UsersListLoading } from '../../../app/modules/apps/user-management/users-list/components/loading/UsersListLoading'
import { isNotEmpty, toAbsoluteUrl } from '../../../_metronic/helpers'

type Props = {
  isUserLoading: boolean
  user: User
}

const editSourceSchema = Yup.object().shape({
  sourceName: Yup.string()
  .min(3, 'Minimum 3 symbols')
  .max(50, 'Maximum 50 symbols')
  .required('sourceName is required'),
  collectionCycle: Yup.string()
  .min(3, 'Minimum 3 symbols')
  .max(50, 'Maximum 50 symbols')
  .required('collectionCycle is required'),
  dataDir: Yup.string()
  .min(3, 'Minimum 3 symbols')
  .max(50, 'Maximum 50 symbols')
  .required('dataDir is required'),    
})

const SourceEditModalForm: FC<Props> = ({user, isUserLoading}) => {
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()

  const [userForEdit] = useState<User>({
    ...user,
    sourceName: user.sourceName || initialUser.sourceName,
    dataDir:user.dataDir || initialUser.dataDir,
    collectionCycle:user.collectionCycle || initialUser.collectionCycle,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const blankImg = toAbsoluteUrl('/media/svg/avatars/blank.svg')
  const userAvatarImg = toAbsoluteUrl(`/media/${userForEdit.avatar}`)

  const formik = useFormik({
    initialValues: userForEdit,
    validationSchema: editSourceSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateUser(values)
        } else {
          await createUser(values)
        }
      } catch (ex) {
        console.error(ex)
      } finally {
        setSubmitting(true)
        cancel(true)
      }
    },
  });
  const [config, setConfig] = useState<ILayout>(getLayout());
  const updateData = (fieldsToUpdate: Partial<ILayout>) => {
    const updatedData = {...config, ...fieldsToUpdate}
    setConfig(updatedData)
  }
  
  const [data, setData] = useState<IProfileDetails>(initialValues);
    const updateDataCheckbox = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }




  // axios 통신으로 받아온 데이터가 존재한다면 액션을 dispatch한다!
  return (
    <>
      <form id='kt_modal_add_user_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_user_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_user_header'
          data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
          data-kt-scroll-offset='300px'
        >
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
        
            {/* end::Label */}

            {/* begin::Image input */}
            {/* <div
              className='image-input image-input-outline'
              data-kt-image-input='true'
              style={{backgroundImage: `url('${blankImg}')`}}
            >
           
              <div
                className='image-input-wrapper w-125px h-125px'
                style={{backgroundImage: `url('${userAvatarImg}')`}}
              ></div> */}
              {/* end::Preview existing avatar */}

              {/* begin::Label */}
              {/* <label
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='change'
              data-bs-toggle='tooltip'
              title='Change avatar'
            >
              <i className='bi bi-pencil-fill fs-7'></i>

              <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
              <input type='hidden' name='avatar_remove' />
            </label> */}
              {/* end::Label */}

              {/* begin::Cancel */}
              {/* <span
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='cancel'
              data-bs-toggle='tooltip'
              title='Cancel avatar'
            >
              <i className='bi bi-x fs-2'></i>
            </span> */}
              {/* end::Cancel */}

              {/* begin::Remove */}
              {/* <span
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='remove'
              data-bs-toggle='tooltip'
              title='Remove avatar'
            >
              <i className='bi bi-x fs-2'></i>
            </span> */}
              {/* end::Remove */}
            </div>
            {/* end::Image input */}

            {/* begin::Hint */}
            {/* <div className='form-text'>Allowed file types: png, jpg, jpeg.</div> */}
            {/* end::Hint */}
          {/* </div> */}
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>소스명</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='소스명'
              {...formik.getFieldProps('sourceName')}
              type='text'
              name='sourceName'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.sourceName && formik.errors.sourceName},
                {
                  'is-valid': formik.touched.sourceName && !formik.errors.sourceName,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.sourceName && formik.errors.sourceName && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.sourceName}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>데이터 형식</label>
            {/* end::Label */}
            {/* begin::Input */}
            <select
                      className='form-select form-select-solid'
                      name='layout-builder[layout][header][width]'
                      value={config.header.width}
                      onChange={(e) =>
                        updateData({
                          header: {
                            ...config.header,
                            width: e.target.value as 'fixed' | 'fluid',
                          },
                        })
                      }
                    >
                      <option value='Data'>정형 데이터</option>
                      <option value='nData'>비정형 데이터</option>
                    </select>
            {/* end::Input */}
          </div>
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>수집주기</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='수집주기'
              {...formik.getFieldProps('collectionCycle')}
              type='text'
              name='collectionCycle'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.collectionCycle && formik.errors.collectionCycle},
                {
                  'is-valid': formik.touched.collectionCycle && !formik.errors.collectionCycle,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.collectionCycle && formik.errors.collectionCycle && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.collectionCycle}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>대상 데이터 위치</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='대상 데이터 위치'
              {...formik.getFieldProps('dataDir')}
              type='text'
              name='dataDir'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                {'is-invalid': formik.touched.dataDir && formik.errors.dataDir},
                {
                  'is-valid': formik.touched.dataDir && !formik.errors.dataDir,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.dataDir && formik.errors.dataDir && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.dataDir}</span>
                </div>
              </div>
            )}
          </div>
          <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>추가 기능</label>

              <div className='col-lg-8 fv-row'>
                <div className='d-flex align-items-center mt-3'>
                  <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.email}
                      onChange={() => {
                        updateDataCheckbox({
                          communications: {
                            email: !data.communications?.email,
                            phone: data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-7'>수집 즉시 전송</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateDataCheckbox({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-7'>확인</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateDataCheckbox({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-7'>파일 이름 변경</span>
                  </label>
                </div>
              </div>
            </div>
          {/* <div className='mb-7'>
            <label className='required fw-bold fs-6 mb-5'>Role</label>
           <div className='d-flex fv-row'>
              <div className='form-check form-check-custom form-check-solid'>
                 <input
                  className='form-check-input me-3'
                  {...formik.getFieldProps('role')}
                  name='role'
                  type='radio'
                  value='Administrator'
                  id='kt_modal_update_role_option_0'
                  checked={formik.values.role === 'Administrator'}
                  disabled={formik.isSubmitting || isUserLoading}
                />
        <label className='form-check-label' htmlFor='kt_modal_update_role_option_0'>
                  <div className='fw-bolder text-gray-800'>Administrator</div>
                  <div className='text-gray-600'>
                    Best for business owners and company administrators
                  </div>
                </label>
              </div>
            </div>
            <div className='separator separator-dashed my-5'></div>
            
            <div className='d-flex fv-row'>
            
              <div className='form-check form-check-custom form-check-solid'>
            
                <input
                  className='form-check-input me-3'
                  {...formik.getFieldProps('role')}
                  name='role'
                  type='radio'
                  value='Developer'
                  id='kt_modal_update_role_option_1'
                  checked={formik.values.role === 'Developer'}
                  disabled={formik.isSubmitting || isUserLoading}
                />
            
            
                <label className='form-check-label' htmlFor='kt_modal_update_role_option_1'>
                  <div className='fw-bolder text-gray-800'>Developer</div>
                  <div className='text-gray-600'>
                    Best for developers or people primarily using the API
                  </div>
                </label>
            
              </div>
            
            </div>
            
            <div className='separator separator-dashed my-5'></div>
            
            <div className='d-flex fv-row'>
            
              <div className='form-check form-check-custom form-check-solid'>
            
                <input
                  className='form-check-input me-3'
                  {...formik.getFieldProps('role')}
                  name='role'
                  type='radio'
                  value='Analyst'
                  id='kt_modal_update_role_option_2'
                  checked={formik.values.role === 'Analyst'}
                  disabled={formik.isSubmitting || isUserLoading}
                />
                <label className='form-check-label' htmlFor='kt_modal_update_role_option_2'>
                  <div className='fw-bolder text-gray-800'>Analyst</div>
                  <div className='text-gray-600'>
                    Best for people who need full access to analytics data, but don't need to update
                    business settings
                  </div>
                </label>
              </div>
            </div>

            <div className='separator separator-dashed my-5'></div>

            <div className='d-flex fv-row'>
            
              <div className='form-check form-check-custom form-check-solid'>
            
                <input
                  className='form-check-input me-3'
                  {...formik.getFieldProps('role')}
                  name='role'
                  type='radio'
                  value='Support'
                  id='kt_modal_update_role_option_3'
                  checked={formik.values.role === 'Support'}
                  disabled={formik.isSubmitting || isUserLoading}
                />
             
             
                <label className='form-check-label' htmlFor='kt_modal_update_role_option_3'>
                  <div className='fw-bolder text-gray-800'>Support</div>
                  <div className='text-gray-600'>
                    Best for employees who regularly refund payments and respond to disputes
                  </div>
                </label>
        
              </div>
     
            </div>
          
            <div className='separator separator-dashed my-5'></div>
  
            <div className='d-flex fv-row'>
      
              <div className='form-check form-check-custom form-check-solid'>

                <input
                  className='form-check-input me-3'
                  {...formik.getFieldProps('role')}
                  name='role'
                  type='radio'
                  id='kt_modal_update_role_option_4'
                  value='Trial'
                  checked={formik.values.role === 'Trial'}
                  disabled={formik.isSubmitting || isUserLoading}
                />
                <label className='form-check-label' htmlFor='kt_modal_update_role_option_4'>
                  <div className='fw-bolder text-gray-800'>Trial</div>
                  <div className='text-gray-600'>
                    Best for people who need to preview content data, but don't need to make any
                    updates
                  </div>
                </label>
          
              </div>
          
            </div>
          </div> */}
        </div>
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isUserLoading}
          >
            Discard
          </button>
          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isUserLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isUserLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isUserLoading) && <UsersListLoading />}
    </>
  )
}

export {SourceEditModalForm}
