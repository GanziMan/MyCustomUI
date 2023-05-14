/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef, useState} from 'react'
import {KTSVG} from '../../../helpers'
import ApexCharts, {ApexOptions} from 'apexcharts'
import {getCSS, getCSSVariableValue} from '../../../assets/ts/_utils'
import clsx from 'clsx'
import {useThemeMode} from '../../layout/theme-mode/ThemeModeProvider'

type Props = {
  className: string
  svgIcon: string
  color: string
  change: string
}

const StatisticsWidget4: React.FC<Props> = ({className, svgIcon, color, change}) => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const {mode} = useThemeMode()
  const [value, setValue] = useState<number[]>([10,0,0,0,0,0,0]); 
  setTimeout(()=> setValue([Math.floor(Math.random() * 100),20,30,40,50,60,70]),1000);
  // const [complete,setComplete] = useState<number>(0);
  // setTimeout(()=> setComplete(Math.floor(Math.random() * 100)),3000);
  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const height = parseInt(getCSS(chartRef.current, 'height'))
    const labelColor = getCSSVariableValue('--kt-gray-800')
    const baseColor = getCSSVariableValue('--kt-' + color)
    const lightColor = getCSSVariableValue('--kt-' + color + '-light')
    const chart = new ApexCharts(
      chartRef.current,
      getChartOptions(height, labelColor, baseColor, lightColor,value)
    )
    if (chart) {
      chart.render()
    }
    return chart
  }

  useEffect(() => {
    const chart = refreshChart()
    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef, color, mode])

  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body p-0'>
        <div className='d-flex flex-stack card-p flex-grow-1'>
          <span className={clsx('symbol symbol-50px', `symbol-light-${color}`, 'me-2')}>
            <span className='symbol-label'>
              <KTSVG path={svgIcon} className={`svg-icon-2x svg-icon-${color}`} />
            </span>
          </span>

          <div className='d-flex flex-column text-end'>
            <span className='text-dark fw-bold fs-2'>{change}</span>
          </div>
        </div>

        <div
          ref={chartRef}
          className='statistics-widget-4-chart card-rounded-bottom'
          style={{height: "275px"}}
        ></div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {StatisticsWidget4}

function getChartOptions(
  height: number,
  labelColor: string,
  baseColor: string,
  lightColor: string,
  value : number[]
): ApexOptions {
  
   return {
    series: [
      {
        name: 'Net Profit',
        data: value,
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: height,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: true,
    },
    dataLabels: {
      enabled: true,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      labels: {
        show: true,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        show: true,
        position: 'front',
        stroke: {
          color: '#E4E6EF',
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: true,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: true,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return '$' + val + ' thousands'
        },
      },
    },
    colors: [lightColor],
    markers: {
      colors: [lightColor],
      strokeColors: [baseColor],
      strokeWidth: 4,
    },
  }
}
