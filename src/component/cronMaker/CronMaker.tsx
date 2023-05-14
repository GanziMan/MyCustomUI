/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { customAxiosCron } from '../../apis/utils'
import { cronValue_REQ } from '../../redux/actions/creatorActions'

type Props = {
  className: string
}

const CronMaker: React.FC<Props> = ({ className }) => {

  const SelectHour = () => {
    const result = [];
    result.push(<option>선택 해주세요</option>)
     for (var i = 0; i <= 23; i++) {
     result.push(<option key={i} value={i}>{i}</option>);
    }
    return result;
  };
  const SelectMin = () => {
    const result = [];
    result.push(<option>선택 해주세요</option>)
     for (var i = 0; i <= 59; i++) {
     result.push(<option key={i} value={i}>{i}</option>);
    }
    return result;
  };

  const [cronValue, setCronValue] = useState("");
  const dispatch = useDispatch();

  const [minText, setMinText] = useState<string>('');
  const changeMin = (e: any) => {
    setMinText(e.target.value);
  }

  //Hourly 
  const [hourText, setHourText] = useState<string>('');
  const changeHour = (e: any) => {
    setHourText(e.target.value);
  }
  const [hourText2, setHourText2] = useState<string>('');
  const changeHour2 = (e: any) => {
    setHourText2(e.target.value);
  }
  const [hourText3, setHourText3] = useState<string>('');
  const changeHour3 = (e: any) => {
    setHourText3(e.target.value);
  }

  //Daily
  const [dailyHour, setDailyHour] = useState<string>('');
  const DailyHour = (e: any) => {
    setDailyHour(e.target.value);
  }
  const [dailyMin, setDailyMin] = useState<string>('');
  const DailyMin = (e: any) => {
    setDailyMin(e.target.value);
  }

  //Weekly

  const [weeklyHour, setWeeklyHour] = useState<string>('');
  const WeekHour = (e: any) => {
    setWeeklyHour(e.target.value);
  }
  const [weeklyMin, setWeekMin] = useState<string>('');
  const WeekMin = (e: any) => {
    setWeekMin(e.target.value);
  }

  //Monthly
  const [monthlyHour, setMonthlyHour] = useState<string>('');
  const MonthlyHour = (e: any) => {
    setMonthlyHour(e.target.value);
  }
  const [monthlyMin, setMonthlyMin] = useState<string>('');
  const MonthlyMin = (e: any) => {
    setMonthlyMin(e.target.value);
  }

  const [monthlyDayvalue, setMonthlyDayvalue] = useState<string>('');
  const MonthlyDay = (e: any) => {
    setMonthlyDayvalue(e.target.value);
  }
  const [monthlyMonthvalue, setMonthlyMonthvalue] = useState<string>('');
  const MonthlyMonth = (e: any) => {
    setMonthlyMonthvalue(e.target.value);
  }

  const [monthlyNumber, setMonthlySetNumber] = useState<string>('');
  const MonthlyNumber = (e: any) => {
    setMonthlySetNumber(e.target.value);
  }
  const [monthlyDay2, setMonthlySetDay] = useState<string>('');
  const MonthlyDay2 = (e: any) => {
    setMonthlySetDay(e.target.value);
  }

  //Yearly
  const [yearlyHour, setYearlyHour] = useState<string>('');
  const YearlyHour = (e: any) => {
    setYearlyHour(e.target.value);
  }
  const [yearlyMin, setYearlyMin] = useState<string>('');
  const YearlyMin = (e: any) => {
    setYearlyMin(e.target.value);
  }
  const [yearlyDay, setYearlyDay] = useState<string>('');
  const YearlyDay = (e: any) => {
    setYearlyDay(e.target.value);
  }
  const [yearlyMonth, setYearlyMonth] = useState<string>('');
  const YearlyMonth = (e: any) => {
    setYearlyMonth(e.target.value);
  }

  const [yearlyDay2, setYearlyDay2] = useState<string>('');
  const YearlyDay2 = (e: any) => {
    setYearlyDay2(e.target.value);
  }
  const [yearlyMonth2, setYearlyMonth2] = useState<string>('');
  const YearlyMonth2 = (e: any) => {
    setYearlyMonth2(e.target.value);
  }
  const [yearlyWeek, setYearlyWeek] = useState<string>('');
  const YearlyWeek = (e: any) => {
    setYearlyWeek(e.target.value);
  }


  //Hour
  const [selected, setSelected] = useState('yes');
  const handleChange = (e: any) => {
    console.log(e.target.value);
    setSelected(e.target.value);
  };

  //Daily
  const [selected2, setSelected2] = useState('yes');
  const handleChange2 = (e: any) => {
    console.log(e.target.value);
    setSelected2(e.target.value);
  };

  //Weekly

  //Monthly
  const [selected4, setSelected4] = useState('yes');
  const handleChange4 = (e: any) => {
    console.log(e.target.value);
    setSelected4(e.target.value);
  };

  //Yearly
  const [selected5, setSelected5] = useState('yes');
  const handleChange5 = (e: any) => {
    console.log(e.target.value);
    setSelected5(e.target.value);
  };

  const Min = (data: string) => {
    customAxiosCron.post("minutes", { minutes: data })
      .then(function (response) {
        console.log(response.data.data);
        setCronValue(response.data.data);
        dispatch(cronValue_REQ(response.data.data));
      })
  }

  const Hour = (data: string) => {
    customAxiosCron.post("hours", { hours: data })
      .then(function (response) {
        setCronValue(response.data.data);
        dispatch(cronValue_REQ(response.data.data));
      })
  }
  const AndHour = (hour: string, min: string) => {
    customAxiosCron.post("hoursAndMinute", { hours: hour, minutes: min })
      .then(function (response) {
        console.log(response.data.data);
        setCronValue(response.data.data);
        dispatch(cronValue_REQ(response.data.data));
      })
  }
  const DailyDay = (hour: string, min: string) => {
    customAxiosCron.post("dailyDay", { hours: hour, minutes: min })
      .then(function (response) {
        setCronValue(response.data.data);
        dispatch(cronValue_REQ(response.data.data));
      })
  }
  const DailyWeek = (hour: string, min: string) => {
    customAxiosCron.post("dailyWeekday", { hours: hour, minutes: min })
      .then(function (response) {
        setCronValue(response.data.data);
        dispatch(cronValue_REQ(response.data.data));
      })
  }
  const Weekly = (hour: string, min: string, day: string) => {
    customAxiosCron.post("weekly", { hours: hour, minutes: min, day: day})
      .then(function (response) {
        setCronValue(response.data.data);
        dispatch(cronValue_REQ(response.data.data));
      })
  }
  const monthlyDay = (hour: string, min: string, day: string, month: string) => {
    customAxiosCron.post("monthlyDay", { hours: hour, minutes: min, day: day, month: month })
      .then(function (response) {
        setCronValue(response.data.data);
        dispatch(cronValue_REQ(response.data.data));
      })
  }
  const monthlyWeek = (min: string, hour: string, day: string, week: string, month: string) => {
    customAxiosCron.post("monthlyWeek", { hours: hour, minutes: min, day: day, week: week, month: month })
      .then(function (response) {
        setCronValue(response.data.data);
        dispatch(cronValue_REQ(response.data.data));
      })
  }
  const yearlyMonthDay = (min: string, hour: string, day: string, month: string) => {
    customAxiosCron.post("yearlyMonthDay", { minutes: min, hours: hour, day: day, month: month })
      .then(function (response) {
        setCronValue(response.data.data);
        dispatch(cronValue_REQ(response.data.data));
      })
  }
  const yearlyMonthWeekDay = (min: string, hour: string, day: string, week: string, month: string) => {
    customAxiosCron.post("yearlyMonthWeekDay", { minutes: min, hours: hour, day: day, week: week, month: month })
      .then(function (response) {
        setCronValue(response.data.data);
        dispatch(cronValue_REQ(response.data.data));
      })
  }
  const categoryList = [
    { name: 'MON' },
    { name: 'TUE' },
    { name: 'WED' },
    { name: 'THU' },
    { name: 'FRI' },
    { name: 'SAT' },
    { name: 'SUN' },
  ];
  const [checkedList, setCheckedList] = useState<Array<string>>(['']);
  const onCheckedItem = useCallback(
    (checked: boolean, item: string) => {
      if (checked) {
        setCheckedList((prev) => [...prev, item]);
      } else if (!checked) {
        setCheckedList(checkedList.filter((el) => el !== item));
      }
    },
    [checkedList]
  );
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
    
        <div className='card-toolbar'>
          <ul className='nav'>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_1'
              >
                1
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_2'
              >
                2
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_3'
              >
                3
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_4'
              >
                4
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_5'
              >
                5
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_6'
              >
                6
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_5_tab_1'>
            {/* begin::Table container */}
            <div className='row mb-12'>
              <div className='col-md-6 fv-row'>
                <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                  <span className='required'>Every minutes</span>
                </label>
                <select className='form-control form-control-solid' onChange={changeMin} value={minText}>
                <option value=''>선택 해주세요</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
                <option value='30'>30</option>
                </select>
              </div>
            </div>
            <div className='btn btn-icon btn-primary w-90px h-40px pulse pulse-white' onClick={() => Min(minText)}>
              Generate 
            </div>
           <div className='form-control form-control-lg form-control-solid'>
           {cronValue}
           </div>
          
         
            {/* end::Table */}
          </div>

          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_5_tab_2'>
            <div className='row mb-12'>
              <span className='d-flex align-items-center me-2'>
                <span className='form-check form-check-custom form-check-solid'>
                  <input type="radio" value="yes" name='hour' className='form-check-input' checked={selected === 'yes'} onChange={handleChange} ></input>
                </span>
                <span className='d-flex flex-column'>
                  <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                    Every Hours
                  </span>
                </span>
              </span>
              <div className='col-md-6 fv-row'>
                <select  className='form-control form-control-solid' onChange={changeHour} value={hourText}>
                <option value=''>선택 해주세요</option>
                <option value='1'>1</option>
                
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='6'>6</option>
                            <option value='12'>12</option>
                </select>
              </div>
            </div>

            <div className='row mb-12'>
            <span className='d-flex align-items-center me-2'>
              <span className='form-check form-check-custom form-check-solid'>
                <input type="radio" name='hour' value="no" className='form-check-input' onChange={handleChange} checked={selected === 'no'} />
              </span>

              <span className='d-flex flex-column'>
                  <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                    Start at
                  </span>
                </span>
            </span>

              <div className='col-md-6 fv-row'>
                <select  className='form-control form-control-solid' onChange={changeHour2} value={hourText2} >
                  
                {SelectHour()}
                  
                </select>
              </div>
              <div className='col-md-6 fv-row'>
                <select className='form-control form-control-solid' onChange={changeHour3} value={hourText3} >
                  {SelectMin()}
                </select>
              </div>
            </div>
            {/* end::Table */}
            {
              selected === 'yes' ? <div
                className='btn btn-icon btn-primary w-90px h-40px pulse pulse-white'
                onClick={() => Hour(hourText)}>
                Generate
              </div> : <div
                className='btn btn-icon btn-primary w-90px h-40px pulse pulse-white'
                onClick={() => AndHour(hourText2, hourText3)}>
                Generate
              </div>
            }
            <div className='form-control form-control-lg form-control-solid'>
           {cronValue}
           </div>
          </div>
          {/* end::Tap pane */}
          {/* begin::Tap pane */}
          <div className='tab-pane fade' id='kt_table_widget_5_tab_3'>
          <div className='row mb-12'>
              <span className='d-flex align-items-center me-2'>
              <span className='form-check form-check-custom form-check-solid'>
                <input type="radio" className='form-check-input' value="yes" name='daily' checked={selected2 === 'yes'} onChange={handleChange2} />
              </span>
                <span className='d-flex flex-column'>
                  <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                    Everyday
                  </span>
                </span>
               
              </span>
              </div>
              <div className='row mb-12'>
              <span className='d-flex align-items-center me-2'>
              <span className='form-check form-check-custom form-check-solid'>
                <input type="radio" className='form-check-input' value="no" name='daily' checked={selected2 === 'no'} onChange={handleChange2} />
              </span>
                <span className='d-flex flex-column'>
                  <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                    Every weekday
                  </span>
                </span>
              </span>
              </div>
             
           

            <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
              <span className='required'>Start at</span>
            </label>
            <div className='row mb-12'>
              <div className='col-md-6 fv-row'>
                <select  className='form-control form-control-solid' onChange={DailyHour} value={dailyHour} >
                   {SelectHour()}
                </select>
              </div>
              <div className='col-md-6 fv-row'>
                <select className='form-control form-control-solid' onChange={DailyMin} value={dailyMin} >
                  {SelectMin()}
                </select>
              </div>
            </div>
            {
              selected2 === 'yes' ? <><div
                className='btn btn-icon btn-primary w-90px h-40px pulse pulse-white'
                onClick={() => DailyDay(dailyHour, dailyMin)}>
                Generate
              </div> </> : <><div
                className='btn btn-icon btn-primary w-90px h-40px pulse pulse-white'
                onClick={() => DailyWeek(dailyHour, dailyMin)}>
                Generate
              </div> </>
            }
            <div className='form-control form-control-lg form-control-solid'>
           {cronValue}
           </div>
          </div>
          <div className='tab-pane fade' id='kt_table_widget_5_tab_4'>
            <div className='row mb-12'>
              <div className='list'>
                {categoryList.map((item) => {
                  return (
                    <label className='checkboxLabel' key={item.name}>
                      <input
                        type='checkbox'
                        id={item.name}
                        className='form-check-input'
                        onChange={(e) => {
                          onCheckedItem(e.target.checked, e.target.id);
                        }}
                      />
                      <label htmlFor={item.name}>
                        <span></span>
                        {item.name}
                      </label>
                      &emsp;
                    </label>

                  );
                })}
              </div>
            </div>
            {/* end::Table */}
            <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
              <span className='required'>Start at</span>
            </label>
            <div className='row mb-12'>
              <div className='col-md-6 fv-row'>
                <select  className='form-control form-control-solid' onChange={WeekHour} value={weeklyHour} >
                  {SelectHour()}
                </select>
              </div>
              <div className='col-md-6 fv-row'>
                <select className='form-control form-control-solid' onChange={WeekMin} value={weeklyMin} >
                  {SelectMin()}
                </select>
              </div>
            </div>
            <div className='btn btn-icon btn-primary w-90px h-40px pulse pulse-white' onClick={() => Weekly(weeklyHour, weeklyMin, checkedList.join(',').slice(1))}>
              Generate
            </div>
            <div className='form-control form-control-lg form-control-solid'>
           {cronValue}
           </div>
          </div>

          <div className='tab-pane fade' id='kt_table_widget_5_tab_5'>

            <span className='d-flex align-items-center me-2'>
              <span className='form-check form-check-custom form-check-solid'>
                <input type="radio" value="yes" className='form-check-input' name='monthly' checked={selected4 === 'yes'} onChange={handleChange4} />
              </span>
              <span className='d-flex flex-column'>
                <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                  Monthly Day
                </span>
              </span>
            </span>

            <div className='row mb-12'>
              <div className='col-md-6 fv-row'>
                <input type="text" className='form-control form-control-solid' onChange={MonthlyDay} value={monthlyDayvalue} />
              </div>
              <div className='col-md-6 fv-row'>
                <select  className='form-control form-control-solid' onChange={MonthlyMonth} value={monthlyMonthvalue} >
                <option value=''>선택 해주세요</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
            <span className='d-flex align-items-center me-2'>
            <span className='form-check form-check-custom form-check-solid'>
            <input type="radio" value="no" className='form-check-input' name='monthly' checked={selected4 === 'no'} onChange={handleChange4} />
            </span>
            <span className='d-flex flex-column'>
                <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                  Monthly Week
                </span>
              </span>
              </span>
            <div className='row mb-12'>
              <div className='col-md-4 fv-row'>
                <select  className='form-control form-control-solid' onChange={MonthlyNumber} value={monthlyNumber} >
                <option value=''>선택 해주세요</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>

              </div>
              <div className='col-md-4 fv-row'>
                <select  className='form-control form-control-solid' onChange={MonthlyDay2} value={monthlyDay2} >
                <option value=''>선택 해주세요</option>
                  <option value="MON"> Monday </option>
                  <option value="TUE"> Tuesday </option>
                  <option value="WED"> Wednesday </option>
                  <option value="THU"> Thursday </option>
                  <option value="FRI"> Friday </option>
                  <option value="SAT"> Saturday </option>
                  <option value="SUN"> Sunday </option>
                </select>
              </div>
              <div className='col-md-4 fv-row'>
                <select  className='form-control form-control-solid' onChange={MonthlyMonth} value={monthlyMonthvalue} >
                <option value=''>선택 해주세요</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
            <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
              <span className='required'>Start at</span>
            </label>
            <div className='row mb-12'>
              <div className='col-md-6 fv-row'>
                <select className='form-control form-control-solid' onChange={MonthlyHour} value={monthlyHour} >
                  {SelectHour()}
                </select>
              </div>
              <div className='col-md-6 fv-row'>
                <select className='form-control form-control-solid' onChange={MonthlyMin} value={monthlyMin} >
                  {SelectMin()}
                </select>
              </div>
            </div>
            {
              selected4 === 'yes' ? <div
                className='btn btn-icon btn-primary w-90px h-40px pulse pulse-white'
                onClick={() => monthlyDay(monthlyHour, monthlyMin, monthlyDayvalue, monthlyMonthvalue)}>
                Generate
              </div> : <div
                className='btn btn-icon btn-primary w-90px h-40px pulse pulse-white'
                onClick={() => monthlyWeek(monthlyMin, monthlyHour, monthlyDay2, monthlyNumber, monthlyMonthvalue)}>
                Generate
              </div>
            }
            <div className='form-control form-control-lg form-control-solid'>
           {cronValue}
           </div>
            
          </div>


          <div className='tab-pane fade' id='kt_table_widget_5_tab_6'>

          
{/* <div className='mb-0'>
              <span className='d-flex align-items-center me-2'>
                <span className='d-flex flex-column'>
                  <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                    Everyday
                  </span>
                </span>
              </span>
              <span className='form-check form-check-custom form-check-solid'>
                <input type="radio" className='form-check-input' value="yes" name='daily' checked={selected2 === 'yes'} onChange={handleChange2} />
              </span>
              <span className='d-flex align-items-center me-2'>
                <span className='d-flex flex-column'>
                  <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                    Every weekday
                  </span>
                </span>
              </span>
              <span className='form-check form-check-custom form-check-solid'>
                <input type="radio" className='form-check-input' value="no" name='daily' checked={selected2 === 'no'} onChange={handleChange2} />
              </span>
            </div> */}
            
             <span className='d-flex align-items-center me-2'>
             <span className='form-check form-check-custom form-check-solid'>
            <input type="radio" value="yes" className='form-check-input' name='yearly' checked={selected5 === 'yes'} onChange={handleChange5} />
            </span>
                <span className='d-flex flex-column'>
                  <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                    Yearly Month day
                  </span>
                </span>
              </span>
            
            <div className='row mb-12'>
              <div className='col-md-6 fv-row'>
                <select className='form-control form-control-solid' onChange={YearlyDay} value={yearlyDay} >
                <option value=''>선택 해주세요</option>
                <option value="1">1월</option>
                  <option value="2">2월</option>
                  <option value="3">3월</option>
                  <option value="4">4월</option>
                  <option value="5">5월</option>
                  <option value="6">6월</option>
                  <option value="7">7월</option>
                  <option value="8">8월</option>
                  <option value="9">9월</option>
                  <option value="10">10월</option>
                  <option value="11">11월</option>
                  <option value="12">12월</option>
                </select>
              </div>
              <div className='col-md-6 fv-row'>
                <input type="text" className='form-control form-control-solid' onChange={YearlyMonth} value={yearlyMonth} />
              </div>
            </div>
         
            <span className='d-flex align-items-center me-2'>
            <span className='form-check form-check-custom form-check-solid'>
            <input type="radio" value="no" className='form-check-input' name='yearly' checked={selected5 === 'no'} onChange={handleChange5} />
            </span>
                <span className='d-flex flex-column'>
                  <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                  Yearly Month Week Day
                  </span>
                </span>
              </span>
            <div className='row mb-12'>
              <div className='col-md-4 fv-row'>
                <select  className='form-control form-control-solid' onChange={YearlyDay2} value={yearlyDay2} >
                <option value=''>선택 해주세요</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className='col-md-4 fv-row'>
                <select className='form-control form-control-solid' onChange={YearlyWeek} value={yearlyWeek} >
                <option value=''>선택 해주세요</option>
                <option value="MON"> Monday </option>
                  <option value="TUE"> Tuesday </option>
                  <option value="WED"> Wednesday </option>
                  <option value="THU"> Thursday </option>
                  <option value="FRI"> Friday </option>
                  <option value="SAT"> Saturday </option>
                  <option value="SUN"> Sunday </option>
                </select>
              </div>
              <div className='col-md-4 fv-row'>
                <select className='form-control form-control-solid' onChange={YearlyMonth2} value={yearlyMonth2} >
                <option value=''>선택 해주세요</option>
                <option value="1">1월</option>
                  <option value="2">2월</option>
                  <option value="3">3월</option>
                  <option value="4">4월</option>
                  <option value="5">5월</option>
                  <option value="6">6월</option>
                  <option value="7">7월</option>
                  <option value="8">8월</option>
                  <option value="9">9월</option>
                  <option value="10">10월</option>
                  <option value="11">11월</option>
                  <option value="12">12월</option>
                </select>
              </div>
            </div>
            <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
              <span className='required'>Start at</span>
            </label>
            <div className='row mb-12'>
              <div className='col-md-6 fv-row'>
                <select  className='form-control form-control-solid' onChange={YearlyHour} value={yearlyHour} >
                  {SelectHour()}
                </select>
              </div>
              <div className='col-md-6 fv-row'>
                <select className='form-control form-control-solid' onChange={YearlyMin} value={yearlyMin} >
                  {SelectMin()}
                </select>
              </div>
            </div>
            {
              selected5 === 'yes' ? <div
                className='btn btn-icon btn-primary w-90px h-40px pulse pulse-white'
                onClick={() => yearlyMonthDay(yearlyMin, yearlyHour, yearlyDay, yearlyMonth)}>
                Generate
              </div> : <div
                className='btn btn-icon btn-primary w-90px h-40px pulse pulse-white'
                onClick={() => yearlyMonthWeekDay(yearlyMin, yearlyHour, yearlyDay2, yearlyWeek, yearlyMonth2)}>
                Generate
              </div>
            }
            <div className='form-control form-control-lg form-control-solid'>
           {cronValue}
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CronMaker }
