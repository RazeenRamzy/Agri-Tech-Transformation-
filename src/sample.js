


  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  cibToggl,
  cisBatteryCharge,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cilCloud,
  cilSun,
  cilRain,
  cibMeteor,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibIcq,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilToggleOn,
  cidToggleOff,
  cilUserFemale,
  cilCheck,
  cilX,
  cilPowerStandby,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/s1.jpeg'
import avatar8 from 'src/assets/images/avatars/s2.jpeg'
import avatar9 from 'src/assets/images/avatars/s3.jpeg'
import avatar10 from 'src/assets/images/avatars/s4.jpeg'
import avatar11 from 'src/assets/images/avatars/s5.jpeg'
import avatar12 from 'src/assets/images/avatars/s6.png'

// import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Total Area', value: '29.703 Area', percent: 40, color: 'success' },
    { title: 'Total Crop', value: '24.093 Crop', percent: 20, color: 'info' },
    { title: 'Total Yield', value: '78.706 Yield', percent: 60, color: 'warning' },
    { title: 'Total Revenue', value: '22.123 Revenue', percent: 80, color: 'danger' },
    { title: 'Total plant', value: ' plant', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  // const progressGroupExample3 = [
  //   { title: 'Cloudy', icon: cilCloud, percent: 56, value: '' },
  //   { title: 'Sunny', icon: cilSun, percent: 15, value: '' },
  //   { title: 'Rainy', icon: cilRain, percent: 11, value: '' },
  //   { title: 'wind', icon: cibMeteor, percent: 8, value: '' },
  // ]
  const progressGroupExample2 = [
    { title: 'Corn', icon: cibIcq, value: 53 },
    { title: 'Rice', icon: cibIcq, value: 83 },
    { title: 'Barley', icon: cibIcq, value: 73 },
    { title: 'Oats', icon: cibIcq, value: 43 },
    { title: 'Wheat', icon: cibIcq, value: 27 },
    { title: 'Soybean', icon: cibIcq, value: 93 },
  ]
  const tableExample = [
    {
      avatar: { src: avatar7, status: 'success' },
      user: {
        name: 'Ultra Sonic Sensor',
        new: true,
        registered: 'June 1, 2023',
      },
      country: { name: 'USA', flag: cilPowerStandby },
      usage: {
        value: 80,
        period: 'Nov 11, 2023 - Dec 10, 2023',
        color: 'success',
      },
      payment: { name: 's', icon: cilCheck },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar8, status: 'danger' },
      user: {
        name: 'Nutrient Sensor',
        new: false,
        registered: 'June 10, 2023',
      },
      country: { name: 'Brazil', flag: cilPowerStandby },
      usage: {
        value: 62,
        period: 'Jun 11, 2023 - Jul 17, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cilCheck },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar9, status: 'success' },
      user: { name: 'Infrared Sensor', new: true, registered: 'May 7, 2023' },
      country: { name: 'India', flag: cilPowerStandby },
      usage: {
        value: 74,
        period: 'Aug 21, 2023 - Nov 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cilCheck },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar10, status: 'success' },
      user: { name: 'Crop Health Sensor', new: true, registered: 'Dec 8, 2023' },
      country: { name: 'France', flag: cilPowerStandby },
      usage: {
        value: 98,
        period: 'Dec 11, 2023 - Jan 10, 2024',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cilX },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar11, status: 'success' },
      user: {
        name: 'Weather Station Sensor',
        new: true,
        registered: 'June 9, 2023',
      },
      country: { name: 'Spain', flag: cilPowerStandby },
      usage: {
        value: 32,
        period: 'Jun 11, 2023 - Aug 24, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cilCheck },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar12, status: 'danger' },
      user: {
        name: 'Gps & Location Sensor',
        new: true,
        registered: 'Jan 1, 2024',
      },
      country: { name: 'Poland', flag: cilPowerStandby },
      usage: {
        value: 43,
        period: 'Jan 11, 2024 - Feb 10, 2024',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cilCheck },
      activity: '3 days ago',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Agri Tech User Dashbord Overview
              </h4>
              <div className="small text-medium-emphasis">July 2023 - January 2024</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Crop',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'Yield',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'Revenue',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },import avatar1 from 'src/assets/images/avatars/1.jpg'
                import avatar2 from 'src/assets/images/avatars/2.jpg'
                import avatar3 from 'src/assets/images/avatars/3.jpg'
                import avatar4 from 'src/assets/images/avatars/4.jpg'
                import avatar5 from 'src/assets/images/avatars/5.jpg'
                import avatar6 from 'src/assets/images/avatars/6.jpg'
                import avatar7 from 'src/assets/images/avatars/s1.jpeg'
                import avatar8 from 'src/assets/images/avatars/s2.jpeg'
                import avatar9 from 'src/assets/images/avatars/s3.jpeg'
                import avatar10 from 'src/assets/images/avatars/s4.jpeg'
                import avatar11 from 'src/assets/images/avatars/s5.jpeg'
                import avatar12 from 'src/assets/images/avatars/s6.png'
                
                // import WidgetsBrand from '../widgets/WidgetsBrand'
                import WidgetsDropdown from '../widgets/WidgetsDropdown'
                
                const Dashboard = () => {
                  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
                
                  const progressExample = [
                    { title: 'Total Area', value: '29.703 Area', percent: 40, color: 'success' },
                    { title: 'Total Crop', value: '24.093 Crop', percent: 20, color: 'info' },
                    { title: 'Total Yield', value: '78.706 Yield', percent: 60, color: 'warning' },
                    { title: 'Total Revenue', value: '22.123 Revenue', percent: 80, color: 'danger' },
                    { title: 'Total plant', value: ' plant', percent: 40.15, color: 'primary' },
                  ]
                
                  const progressGroupExample1 = [
                    { title: 'Monday', value1: 34, value2: 78 },
                    { title: 'Tuesday', value1: 56, value2: 94 },
                    { title: 'Wednesday', value1: 12, value2: 67 },
                    { title: 'Thursday', value1: 43, value2: 91 },
                    { title: 'Friday', value1: 22, value2: 73 },
                    { title: 'Saturday', value1: 53, value2: 82 },
                    { title: 'Sunday', value1: 9, value2: 69 },
                  ]
                
                  // const progressGroupExample3 = [
                  //   { title: 'Cloudy', icon: cilCloud, percent: 56, value: '' },
                  //   { title: 'Sunny', icon: cilSun, percent: 15, value: '' },
                  //   { title: 'Rainy', icon: cilRain, percent: 11, value: '' },
                  //   { title: 'wind', icon: cibMeteor, percent: 8, value: '' },
                  // ]
                  const progressGroupExample2 = [
                    { title: 'Corn', icon: cibIcq, value: 53 },
                    { title: 'Rice', icon: cibIcq, value: 83 },
                    { title: 'Barley', icon: cibIcq, value: 73 },
                    { title: 'Oats', icon: cibIcq, value: 43 },
                    { title: 'Wheat', icon: cibIcq, value: 27 },
                    { title: 'Soybean', icon: cibIcq, value: 93 },
                  ]
                  const tableExample = [
                    {
                      avatar: { src: avatar7, status: 'success' },
                      user: {
                        name: 'Ultra Sonic Sensor',
                        new: true,
                        registered: 'June 1, 2023',
                      },
                      country: { name: 'USA', flag: cilPowerStandby },
                      usage: {
                        value: 80,
                        period: 'Nov 11, 2023 - Dec 10, 2023',
                        color: 'success',
                      },
                      payment: { name: 's', icon: cilCheck },
                      activity: '10 sec ago',
                    },
                    {
                      avatar: { src: avatar8, status: 'danger' },
                      user: {
                        name: 'Nutrient Sensor',
                        new: false,
                        registered: 'June 10, 2023',
                      },
                      country: { name: 'Brazil', flag: cilPowerStandby },
                      usage: {
                        value: 62,
                        period: 'Jun 11, 2023 - Jul 17, 2023',
                        color: 'info',
                      },
                      payment: { name: 'Visa', icon: cilCheck },
                      activity: '5 minutes ago',
                    },
                    {
                      avatar: { src: avatar9, status: 'success' },
                      user: { name: 'Infrared Sensor', new: true, registered: 'May 7, 2023' },
                      country: { name: 'India', flag: cilPowerStandby },
                      usage: {
                        value: 74,
                        period: 'Aug 21, 2023 - Nov 10, 2023',
                        color: 'warning',
                      },
                      payment: { name: 'Stripe', icon: cilCheck },
                      activity: '1 hour ago',
                    },
                    {
                      avatar: { src: avatar10, status: 'success' },
                      user: { name: 'Crop Health Sensor', new: true, registered: 'Dec 8, 2023' },
                      country: { name: 'France', flag: cilPowerStandby },
                      usage: {
                        value: 98,
                        period: 'Dec 11, 2023 - Jan 10, 2024',
                        color: 'danger',
                      },
                      payment: { name: 'PayPal', icon: cilX },
                      activity: 'Last month',
                    },
                    {
                      avatar: { src: avatar11, status: 'success' },
                      user: {
                        name: 'Weather Station Sensor',
                        new: true,
                        registered: 'June 9, 2023',
                      },
                      country: { name: 'Spain', flag: cilPowerStandby },
                      usage: {
                        value: 32,
                        period: 'Jun 11, 2023 - Aug 24, 2023',
                        color: 'primary',
                      },
                      payment: { name: 'Google Wallet', icon: cilCheck },
                      activity: 'Last week',
                    },
                    {
                      avatar: { src: avatar12, status: 'danger' },
                      user: {
                        name: 'Gps & Location Sensor',
                        new: true,
                        registered: 'Jan 1, 2024',
                      },
                      country: { name: 'Poland', flag: cilPowerStandby },
                      usage: {
                        value: 43,
                        period: 'Jan 11, 2024 - Feb 10, 2024',
                        color: 'success',
                      },
                      payment: { name: 'Amex', icon: cilCheck },
                      activity: '3 days ago',
                    },
                  ]
                
                  return (
                    <>
                      <WidgetsDropdown />
                      <CCard className="mb-4">
                        <CCardBody>
                          <CRow>
                            <CCol sm={5}>
                              <h4 id="traffic" className="card-title mb-0">
                                Agri Tech User Dashbord Overview
                              </h4>
                              <div className="small text-medium-emphasis">July 2023 - January 2024</div>
                            </CCol>
                            <CCol sm={7} className="d-none d-md-block">
                              <CButton color="primary" className="float-end">
                                <CIcon icon={cilCloudDownload} />
                              </CButton>
                              <CButtonGroup className="float-end me-3">
                                {['Day', 'Month', 'Year'].map((value) => (
                                  <CButton
                                    color="outline-secondary"
                                    key={value}
                                    className="mx-0"
                                    active={value === 'Month'}
                                  >
                                    {value}
                                  </CButton>
                                ))}
                              </CButtonGroup>
                            </CCol>
                          </CRow>
                          <CChartLine
                            style={{ height: '300px', marginTop: '40px' }}
                            data={{
                              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                              datasets: [
                                {
                                  label: 'Crop',
                                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                                  borderColor: getStyle('--cui-info'),
                                  pointHoverBackgroundColor: getStyle('--cui-info'),
                                  borderWidth: 2,
                                  data: [
                                    random(50, 200),
                                    random(50, 200),
                                    random(50, 200),
                                    random(50, 200),
                                    random(50, 200),
                                    random(50, 200),
                                    random(50, 200),
                                  ],
                                  fill: true,
                                },
                                {
                                  label: 'Yield',
                                  backgroundColor: 'transparent',
                                  borderColor: getStyle('--cui-success'),
                                  pointHoverBackgroundColor: getStyle('--cui-success'),
                                  borderWidth: 2,
                                  data: [
                                    random(50, 200),
                                    random(50, 200),import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/s1.jpeg'
import avatar8 from 'src/assets/images/avatars/s2.jpeg'
import avatar9 from 'src/assets/images/avatars/s3.jpeg'
import avatar10 from 'src/assets/images/avatars/s4.jpeg'
import avatar11 from 'src/assets/images/avatars/s5.jpeg'
import avatar12 from 'src/assets/images/avatars/s6.png'

// import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Total Area', value: '29.703 Area', percent: 40, color: 'success' },
    { title: 'Total Crop', value: '24.093 Crop', percent: 20, color: 'info' },
    { title: 'Total Yield', value: '78.706 Yield', percent: 60, color: 'warning' },
    { title: 'Total Revenue', value: '22.123 Revenue', percent: 80, color: 'danger' },
    { title: 'Total plant', value: ' plant', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  // const progressGroupExample3 = [
  //   { title: 'Cloudy', icon: cilCloud, percent: 56, value: '' },
  //   { title: 'Sunny', icon: cilSun, percent: 15, value: '' },
  //   { title: 'Rainy', icon: cilRain, percent: 11, value: '' },
  //   { title: 'wind', icon: cibMeteor, percent: 8, value: '' },
  // ]
  const progressGroupExample2 = [
    { title: 'Corn', icon: cibIcq, value: 53 },
    { title: 'Rice', icon: cibIcq, value: 83 },
    { title: 'Barley', icon: cibIcq, value: 73 },
    { title: 'Oats', icon: cibIcq, value: 43 },
    { title: 'Wheat', icon: cibIcq, value: 27 },
    { title: 'Soybean', icon: cibIcq, value: 93 },
  ]
  const tableExample = [
    {
      avatar: { src: avatar7, status: 'success' },
      user: {
        name: 'Ultra Sonic Sensor',
        new: true,
        registered: 'June 1, 2023',
      },
      country: { name: 'USA', flag: cilPowerStandby },
      usage: {
        value: 80,
        period: 'Nov 11, 2023 - Dec 10, 2023',
        color: 'success',
      },
      payment: { name: 's', icon: cilCheck },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar8, status: 'danger' },
      user: {
        name: 'Nutrient Sensor',
        new: false,
        registered: 'June 10, 2023',
      },
      country: { name: 'Brazil', flag: cilPowerStandby },
      usage: {
        value: 62,
        period: 'Jun 11, 2023 - Jul 17, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cilCheck },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar9, status: 'success' },
      user: { name: 'Infrared Sensor', new: true, registered: 'May 7, 2023' },
      country: { name: 'India', flag: cilPowerStandby },
      usage: {
        value: 74,
        period: 'Aug 21, 2023 - Nov 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cilCheck },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar10, status: 'success' },
      user: { name: 'Crop Health Sensor', new: true, registered: 'Dec 8, 2023' },
      country: { name: 'France', flag: cilPowerStandby },
      usage: {
        value: 98,
        period: 'Dec 11, 2023 - Jan 10, 2024',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cilX },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar11, status: 'success' },
      user: {
        name: 'Weather Station Sensor',
        new: true,
        registered: 'June 9, 2023',
      },
      country: { name: 'Spain', flag: cilPowerStandby },
      usage: {
        value: 32,
        period: 'Jun 11, 2023 - Aug 24, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cilCheck },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar12, status: 'danger' },
      user: {
        name: 'Gps & Location Sensor',
        new: true,
        registered: 'Jan 1, 2024',
      },
      country: { name: 'Poland', flag: cilPowerStandby },
      usage: {
        value: 43,
        period: 'Jan 11, 2024 - Feb 10, 2024',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cilCheck },
      activity: '3 days ago',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Agri Tech User Dashbord Overview
              </h4>
              <div className="small text-medium-emphasis">July 2023 - January 2024</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChar
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Weather Station Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">GPS & Location Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>Route

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Infrared Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Crop Health Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">LCD Display</div>
                        <div className="fs-5 fw-semibold">Deactive</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Alarm</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {/* {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))} */}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Sensors</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Power</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                    <CTableHeaderCell>Activity Log</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last Update</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  cibToggl,
  cisBatteryCharge,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cilCloud,
  cilSun,
  cilRain,
  cibMeteor,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibIcq,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilToggleOn,
  cidToggleOff,
  cilUserFemale,
  cilCheck,
  cilX,
  cilPowerStandby,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/s1.jpeg'
import avatar8 from 'src/assets/images/avatars/s2.jpeg'
import avatar9 from 'src/assets/images/avatars/s3.jpeg'
import avatar10 from 'src/assets/images/avatars/s4.jpeg'
import avatar11 from 'src/assets/images/avatars/s5.jpeg'
import avatar12 from 'src/assets/images/avatars/s6.png'

// import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Total Area', value: '29.703 Area', percent: 40, color: 'success' },
    { title: 'Total Crop', value: '24.093 Crop', percent: 20, color: 'info' },
    { title: 'Total Yield', value: '78.706 Yield', percent: 60, color: 'warning' },
    { title: 'Total Revenue', value: '22.123 Revenue', percent: 80, color: 'danger' },
    { title: 'Total plant', value: ' plant', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  // const progressGroupExample3 = [
  //   { title: 'Cloudy', icon: cilCloud, percent: 56, value: '' },
  //   { title: 'Sunny', icon: cilSun, percent: 15, value: '' },
  //   { title: 'Rainy', icon: cilRain, percent: 11, value: '' },
  //   { title: 'wind', icon: cibMeteor, percent: 8, value: '' },
  // ]
  const progressGroupExample2 = [
    { title: 'Corn', icon: cibIcq, value: 53 },
    { title: 'Rice', icon: cibIcq, value: 83 },
    { title: 'Barley', icon: cibIcq, value: 73 },
    { title: 'Oats', icon: cibIcq, value: 43 },
    { title: 'Wheat', icon: cibIcq, value: 27 },
    { title: 'Soybean', icon: cibIcq, value: 93 },
  ]
  const tableExample = [
    {
      avatar: { src: avatar7, status: 'success' },
      user: {
        name: 'Ultra Sonic Sensor',
        new: true,
        registered: 'June 1, 2023',
      },
      country: { name: 'USA', flag: cilPowerStandby },
      usage: {
        value: 80,
        period: 'Nov 11, 2023 - Dec 10, 2023',
        color: 'success',
      },
      payment: { name: 's', icon: cilCheck },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar8, status: 'danger' },
      user: {
        name: 'Nutrient Sensor',
        new: false,
        registered: 'June 10, 2023',
      },
      country: { name: 'Brazil', flag: cilPowerStandby },
      usage: {
        value: 62,
        period: 'Jun 11, 2023 - Jul 17, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cilCheck },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar9, status: 'success' },
      user: { name: 'Infrared Sensor', new: true, registered: 'May 7, 2023' },
      country: { name: 'India', flag: cilPowerStandby },
      usage: {
        value: 74,
        period: 'Aug 21, 2023 - Nov 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cilCheck },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar10, status: 'success' },
      user: { name: 'Crop Health Sensor', new: true, registered: 'Dec 8, 2023' },
      country: { name: 'France', flag: cilPowerStandby },
      usage: {
        value: 98,
        period: 'Dec 11, 2023 - Jan 10, 2024',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cilX },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar11, status: 'success' },
      user: {
        name: 'Weather Station Sensor',
        new: true,
        registered: 'June 9, 2023',
      },
      country: { name: 'Spain', flag: cilPowerStandby },
      usage: {
        value: 32,
        period: 'Jun 11, 2023 - Aug 24, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cilCheck },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar12, status: 'danger' },
      user: {
        name: 'Gps & Location Sensor',
        new: true,
        registered: 'Jan 1, 2024',
      },
      country: { name: 'Poland', flag: cilPowerStandby },
      usage: {
        value: 43,
        period: 'Jan 11, 2024 - Feb 10, 2024',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cilCheck },
      activity: '3 days ago',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Agri Tech User Dashbord Overview
              </h4>
              <div className="small text-medium-emphasis">July 2023 - January 2024</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Crop',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'Yield',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'Revenue',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts /> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Agri-Tech {' & '} Transformation</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Ultra Sonic Senssor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Nutrient Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Weather Station Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">GPS & Location Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Infrared Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Crop Health Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">LCD Display</div>
                        <div className="fs-5 fw-semibold">Deactive</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Alarm</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {/* {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))} */}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Sensors</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Power</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                    <CTableHeaderCell>Activity Log</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last Update</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  cibToggl,
  cisBatteryCharge,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cilCloud,
  cilSun,
  cilRain,
  cibMeteor,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibIcq,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilToggleOn,
  cidToggleOff,
  cilUserFemale,
  cilCheck,
  cilX,
  cilPowerStandby,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/s1.jpeg'
import avatar8 from 'src/assets/images/avatars/s2.jpeg'
import avatar9 from 'src/assets/images/avatars/s3.jpeg'
import avatar10 from 'src/assets/images/avatars/s4.jpeg'
import avatar11 from 'src/assets/images/avatars/s5.jpeg'
import avatar12 from 'src/assets/images/avatars/s6.png'

// import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Total Area', value: '29.703 Area', percent: 40, color: 'success' },
    { title: 'Total Crop', value: '24.093 Crop', percent: 20, color: 'info' },
    { title: 'Total Yield', value: '78.706 Yield', percent: 60, color: 'warning' },
    { title: 'Total Revenue', value: '22.123 Revenue', percent: 80, color: 'danger' },
    { title: 'Total plant', value: ' plant', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  // const progressGroupExample3 = [
  //   { title: 'Cloudy', icon: cilCloud, percent: 56, value: '' },
  //   { title: 'Sunny', icon: cilSun, percent: 15, value: '' },
  //   { title: 'Rainy', icon: cilRain, percent: 11, value: '' },
  //   { title: 'wind', icon: cibMeteor, percent: 8, value: '' },
  // ]
  const progressGroupExample2 = [
    { title: 'Corn', icon: cibIcq, value: 53 },
    { title: 'Rice', icon: cibIcq, value: 83 },
    { title: 'Barley', icon: cibIcq, value: 73 },
    { title: 'Oats', icon: cibIcq, value: 43 },
    { title: 'Wheat', icon: cibIcq, value: 27 },
    { title: 'Soybean', icon: cibIcq, value: 93 },
  ]
  const tableExample = [
    {
      avatar: { src: avatar7, status: 'success' },
      user: {
        name: 'Ultra Sonic Sensor',
        new: true,
        registered: 'June 1, 2023',
      },
      country: { name: 'USA', flag: cilPowerStandby },
      usage: {
        value: 80,
        period: 'Nov 11, 2023 - Dec 10, 2023',
        color: 'success',
      },
      payment: { name: 's', icon: cilCheck },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar8, status: 'danger' },
      user: {
        name: 'Nutrient Sensor',
        new: false,
        registered: 'June 10, 2023',
      },
      country: { name: 'Brazil', flag: cilPowerStandby },
      usage: {
        value: 62,
        period: 'Jun 11, 2023 - Jul 17, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cilCheck },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar9, status: 'success' },
      user: { name: 'Infrared Sensor', new: true, registered: 'May 7, 2023' },
      country: { name: 'India', flag: cilPowerStandby },
      usage: {
        value: 74,
        period: 'Aug 21, 2023 - Nov 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cilCheck },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar10, status: 'success' },
      user: { name: 'Crop Health Sensor', new: true, registered: 'Dec 8, 2023' },
      country: { name: 'France', flag: cilPowerStandby },
      usage: {
        value: 98,
        period: 'Dec 11, 2023 - Jan 10, 2024',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cilX },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar11, status: 'success' },
      user: {
        name: 'Weather Station Sensor',
        new: true,
        registered: 'June 9, 2023',
      },
      country: { name: 'Spain', flag: cilPowerStandby },
      usage: {
        value: 32,
        period: 'Jun 11, 2023 - Aug 24, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cilCheck },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar12, status: 'danger' },
      user: {
        name: 'Gps & Location Sensor',
        new: true,
        registered: 'Jan 1, 2024',
      },
      country: { name: 'Poland', flag: cilPowerStandby },
      usage: {
        value: 43,
        period: 'Jan 11, 2024 - Feb 10, 2024',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cilCheck },
      activity: '3 days ago',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Agri Tech User Dashbord Overview
              </h4>
              <div className="small text-medium-emphasis">July 2023 - January 2024</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Crop',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'Yield',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'Revenue',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts /> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Agri-Tech {' & '} Transformation</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Ultra Sonic Senssor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Nutrient Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Weather Station Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">GPS & Location Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Infrared Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Crop Health Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">LCD Display</div>
                        <div className="fs-5 fw-semibold">Deactive</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Alarm</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {/* {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))} */}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Sensors</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Power</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                    <CTableHeaderCell>Activity Log</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last Update</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  cibToggl,
  cisBatteryCharge,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cilCloud,
  cilSun,
  cilRain,
  cibMeteor,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibIcq,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilToggleOn,
  cidToggleOff,
  cilUserFemale,
  cilCheck,
  cilX,
  cilPowerStandby,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/s1.jpeg'
import avatar8 from 'src/assets/images/avatars/s2.jpeg'
import avatar9 from 'src/assets/images/avatars/s3.jpeg'
import avatar10 from 'src/assets/images/avatars/s4.jpeg'
import avatar11 from 'src/assets/images/avatars/s5.jpeg'
import avatar12 from 'src/assets/images/avatars/s6.png'

// import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Total Area', value: '29.703 Area', percent: 40, color: 'success' },
    { title: 'Total Crop', value: '24.093 Crop', percent: 20, color: 'info' },
    { title: 'Total Yield', value: '78.706 Yield', percent: 60, color: 'warning' },
    { title: 'Total Revenue', value: '22.123 Revenue', percent: 80, color: 'danger' },
    { title: 'Total plant', value: ' plant', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  // const progressGroupExample3 = [
  //   { title: 'Cloudy', icon: cilCloud, percent: 56, value: '' },
  //   { title: 'Sunny', icon: cilSun, percent: 15, value: '' },
  //   { title: 'Rainy', icon: cilRain, percent: 11, value: '' },
  //   { title: 'wind', icon: cibMeteor, percent: 8, value: '' },
  // ]
  const progressGroupExample2 = [
    { title: 'Corn', icon: cibIcq, value: 53 },
    { title: 'Rice', icon: cibIcq, value: 83 },
    { title: 'Barley', icon: cibIcq, value: 73 },
    { title: 'Oats', icon: cibIcq, value: 43 },
    { title: 'Wheat', icon: cibIcq, value: 27 },
    { title: 'Soybean', icon: cibIcq, value: 93 },
  ]
  const tableExample = [
    {
      avatar: { src: avatar7, status: 'success' },
      user: {
        name: 'Ultra Sonic Sensor',
        new: true,
        registered: 'June 1, 2023',
      },
      country: { name: 'USA', flag: cilPowerStandby },
      usage: {
        value: 80,
        period: 'Nov 11, 2023 - Dec 10, 2023',
        color: 'success',
      },
      payment: { name: 's', icon: cilCheck },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar8, status: 'danger' },
      user: {
        name: 'Nutrient Sensor',
        new: false,
        registered: 'June 10, 2023',
      },
      country: { name: 'Brazil', flag: cilPowerStandby },
      usage: {
        value: 62,
        period: 'Jun 11, 2023 - Jul 17, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cilCheck },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar9, status: 'success' },
      user: { name: 'Infrared Sensor', new: true, registered: 'May 7, 2023' },
      country: { name: 'India', flag: cilPowerStandby },
      usage: {
        value: 74,
        period: 'Aug 21, 2023 - Nov 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cilCheck },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar10, status: 'success' },
      user: { name: 'Crop Health Sensor', new: true, registered: 'Dec 8, 2023' },
      country: { name: 'France', flag: cilPowerStandby },
      usage: {
        value: 98,
        period: 'Dec 11, 2023 - Jan 10, 2024',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cilX },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar11, status: 'success' },
      user: {
        name: 'Weather Station Sensor',
        new: true,
        registered: 'June 9, 2023',
      },
      country: { name: 'Spain', flag: cilPowerStandby },
      usage: {
        value: 32,
        period: 'Jun 11, 2023 - Aug 24, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cilCheck },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar12, status: 'danger' },
      user: {
        name: 'Gps & Location Sensor',
        new: true,
        registered: 'Jan 1, 2024',
      },
      country: { name: 'Poland', flag: cilPowerStandby },
      usage: {
        value: 43,
        period: 'Jan 11, 2024 - Feb 10, 2024',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cilCheck },
      activity: '3 days ago',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Agri Tech User Dashbord Overview
              </h4>
              <div className="small text-medium-emphasis">July 2023 - January 2024</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Crop',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'Yield',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'Revenue',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts /> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Agri-Tech {' & '} Transformation</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Ultra Sonic Senssor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Nutrient Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Weather Station Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">GPS & Location Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Infrared Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Crop Health Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">LCD Display</div>
                        <div className="fs-5 fw-semibold">Deactive</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Alarm</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {/* {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))} */}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Sensors</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Power</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                    <CTableHeaderCell>Activity Log</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last Update</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  cibToggl,
  cisBatteryCharge,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cilCloud,
  cilSun,
  cilRain,
  cibMeteor,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibIcq,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilToggleOn,
  cidToggleOff,
  cilUserFemale,
  cilCheck,
  cilX,
  cilPowerStandby,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/s1.jpeg'
import avatar8 from 'src/assets/images/avatars/s2.jpeg'
import avatar9 from 'src/assets/images/avatars/s3.jpeg'
import avatar10 from 'src/assets/images/avatars/s4.jpeg'
import avatar11 from 'src/assets/images/avatars/s5.jpeg'
import avatar12 from 'src/assets/images/avatars/s6.png'

// import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Total Area', value: '29.703 Area', percent: 40, color: 'success' },
    { title: 'Total Crop', value: '24.093 Crop', percent: 20, color: 'info' },
    { title: 'Total Yield', value: '78.706 Yield', percent: 60, color: 'warning' },
    { title: 'Total Revenue', value: '22.123 Revenue', percent: 80, color: 'danger' },
    { title: 'Total plant', value: ' plant', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  // const progressGroupExample3 = [
  //   { title: 'Cloudy', icon: cilCloud, percent: 56, value: '' },
  //   { title: 'Sunny', icon: cilSun, percent: 15, value: '' },
  //   { title: 'Rainy', icon: cilRain, percent: 11, value: '' },
  //   { title: 'wind', icon: cibMeteor, percent: 8, value: '' },
  // ]
  const progressGroupExample2 = [
    { title: 'Corn', icon: cibIcq, value: 53 },
    { title: 'Rice', icon: cibIcq, value: 83 },
    { title: 'Barley', icon: cibIcq, value: 73 },
    { title: 'Oats', icon: cibIcq, value: 43 },
    { title: 'Wheat', icon: cibIcq, value: 27 },
    { title: 'Soybean', icon: cibIcq, value: 93 },
  ]
  const tableExample = [
    {
      avatar: { src: avatar7, status: 'success' },
      user: {
        name: 'Ultra Sonic Sensor',
        new: true,
        registered: 'June 1, 2023',
      },
      country: { name: 'USA', flag: cilPowerStandby },
      usage: {
        value: 80,
        period: 'Nov 11, 2023 - Dec 10, 2023',
        color: 'success',
      },
      payment: { name: 's', icon: cilCheck },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar8, status: 'danger' },
      user: {
        name: 'Nutrient Sensor',
        new: false,
        registered: 'June 10, 2023',
      },
      country: { name: 'Brazil', flag: cilPowerStandby },
      usage: {
        value: 62,
        period: 'Jun 11, 2023 - Jul 17, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cilCheck },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar9, status: 'success' },
      user: { name: 'Infrared Sensor', new: true, registered: 'May 7, 2023' },
      country: { name: 'India', flag: cilPowerStandby },
      usage: {
        value: 74,
        period: 'Aug 21, 2023 - Nov 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cilCheck },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar10, status: 'success' },
      user: { name: 'Crop Health Sensor', new: true, registered: 'Dec 8, 2023' },
      country: { name: 'France', flag: cilPowerStandby },
      usage: {
        value: 98,
        period: 'Dec 11, 2023 - Jan 10, 2024',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cilX },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar11, status: 'success' },
      user: {
        name: 'Weather Station Sensor',
        new: true,
        registered: 'June 9, 2023',
      },
      country: { name: 'Spain', flag: cilPowerStandby },
      usage: {
        value: 32,
        period: 'Jun 11, 2023 - Aug 24, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cilCheck },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar12, status: 'danger' },
      user: {
        name: 'Gps & Location Sensor',
        new: true,
        registered: 'Jan 1, 2024',
      },
      country: { name: 'Poland', flag: cilPowerStandby },
      usage: {
        value: 43,
        period: 'Jan 11, 2024 - Feb 10, 2024',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cilCheck },
      activity: '3 days ago',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Agri Tech User Dashbord Overview
              </h4>
              <div className="small text-medium-emphasis">July 2023 - January 2024</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Crop',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'Yield',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'Revenue',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts /> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Agri-Tech {' & '} Transformation</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Ultra Sonic Senssor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Nutrient Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Weather Station Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">GPS & Location Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Infrared Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Crop Health Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">LCD Display</div>
                        <div className="fs-5 fw-semibold">Deactive</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Alarm</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {/* {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))} */}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Sensors</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Power</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                    <CTableHeaderCell>Activity Log</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last Update</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  cibToggl,
  cisBatteryCharge,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cilCloud,
  cilSun,
  cilRain,
  cibMeteor,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibIcq,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilToggleOn,
  cidToggleOff,
  cilUserFemale,
  cilCheck,
  cilX,
  cilPowerStandby,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/s1.jpeg'
import avatar8 from 'src/assets/images/avatars/s2.jpeg'
import avatar9 from 'src/assets/images/avatars/s3.jpeg'
import avatar10 from 'src/assets/images/avatars/s4.jpeg'
import avatar11 from 'src/assets/images/avatars/s5.jpeg'
import avatar12 from 'src/assets/images/avatars/s6.png'

// import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Total Area', value: '29.703 Area', percent: 40, color: 'success' },
    { title: 'Total Crop', value: '24.093 Crop', percent: 20, color: 'info' },
    { title: 'Total Yield', value: '78.706 Yield', percent: 60, color: 'warning' },
    { title: 'Total Revenue', value: '22.123 Revenue', percent: 80, color: 'danger' },
    { title: 'Total plant', value: ' plant', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  // const progressGroupExample3 = [
  //   { title: 'Cloudy', icon: cilCloud, percent: 56, value: '' },
  //   { title: 'Sunny', icon: cilSun, percent: 15, value: '' },
  //   { title: 'Rainy', icon: cilRain, percent: 11, value: '' },
  //   { title: 'wind', icon: cibMeteor, percent: 8, value: '' },
  // ]
  const progressGroupExample2 = [
    { title: 'Corn', icon: cibIcq, value: 53 },
    { title: 'Rice', icon: cibIcq, value: 83 },
    { title: 'Barley', icon: cibIcq, value: 73 },
    { title: 'Oats', icon: cibIcq, value: 43 },
    { title: 'Wheat', icon: cibIcq, value: 27 },
    { title: 'Soybean', icon: cibIcq, value: 93 },
  ]
  const tableExample = [
    {
      avatar: { src: avatar7, status: 'success' },
      user: {
        name: 'Ultra Sonic Sensor',
        new: true,
        registered: 'June 1, 2023',
      },
      country: { name: 'USA', flag: cilPowerStandby },
      usage: {
        value: 80,
        period: 'Nov 11, 2023 - Dec 10, 2023',
        color: 'success',
      },
      payment: { name: 's', icon: cilCheck },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar8, status: 'danger' },
      user: {
        name: 'Nutrient Sensor',
        new: false,
        registered: 'June 10, 2023',
      },
      country: { name: 'Brazil', flag: cilPowerStandby },
      usage: {
        value: 62,
        period: 'Jun 11, 2023 - Jul 17, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cilCheck },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar9, status: 'success' },
      user: { name: 'Infrared Sensor', new: true, registered: 'May 7, 2023' },
      country: { name: 'India', flag: cilPowerStandby },
      usage: {
        value: 74,
        period: 'Aug 21, 2023 - Nov 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cilCheck },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar10, status: 'success' },
      user: { name: 'Crop Health Sensor', new: true, registered: 'Dec 8, 2023' },
      country: { name: 'France', flag: cilPowerStandby },
      usage: {
        value: 98,
        period: 'Dec 11, 2023 - Jan 10, 2024',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cilX },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar11, status: 'success' },
      user: {
        name: 'Weather Station Sensor',
        new: true,
        registered: 'June 9, 2023',
      },
      country: { name: 'Spain', flag: cilPowerStandby },
      usage: {
        value: 32,
        period: 'Jun 11, 2023 - Aug 24, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cilCheck },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar12, status: 'danger' },
      user: {
        name: 'Gps & Location Sensor',
        new: true,
        registered: 'Jan 1, 2024',
      },
      country: { name: 'Poland', flag: cilPowerStandby },
      usage: {
        value: 43,
        period: 'Jan 11, 2024 - Feb 10, 2024',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cilCheck },
      activity: '3 days ago',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Agri Tech User Dashbord Overview
              </h4>
              <div className="small text-medium-emphasis">July 2023 - January 2024</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Crop',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'Yield',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'Revenue',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts /> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Agri-Tech {' & '} Transformation</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Ultra Sonic Senssor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Nutrient Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Weather Station Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">GPS & Location Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Infrared Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Crop Health Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">LCD Display</div>
                        <div className="fs-5 fw-semibold">Deactive</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Alarm</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {/* {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))} */}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Sensors</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Power</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                    <CTableHeaderCell>Activity Log</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last Update</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  cibToggl,
  cisBatteryCharge,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cilCloud,
  cilSun,
  cilRain,
  cibMeteor,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibIcq,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilToggleOn,
  cidToggleOff,
  cilUserFemale,
  cilCheck,
  cilX,
  cilPowerStandby,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/s1.jpeg'
import avatar8 from 'src/assets/images/avatars/s2.jpeg'
import avatar9 from 'src/assets/images/avatars/s3.jpeg'
import avatar10 from 'src/assets/images/avatars/s4.jpeg'
import avatar11 from 'src/assets/images/avatars/s5.jpeg'
import avatar12 from 'src/assets/images/avatars/s6.png'

// import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Total Area', value: '29.703 Area', percent: 40, color: 'success' },
    { title: 'Total Crop', value: '24.093 Crop', percent: 20, color: 'info' },
    { title: 'Total Yield', value: '78.706 Yield', percent: 60, color: 'warning' },
    { title: 'Total Revenue', value: '22.123 Revenue', percent: 80, color: 'danger' },
    { title: 'Total plant', value: ' plant', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  // const progressGroupExample3 = [
  //   { title: 'Cloudy', icon: cilCloud, percent: 56, value: '' },
  //   { title: 'Sunny', icon: cilSun, percent: 15, value: '' },
  //   { title: 'Rainy', icon: cilRain, percent: 11, value: '' },
  //   { title: 'wind', icon: cibMeteor, percent: 8, value: '' },
  // ]
  const progressGroupExample2 = [
    { title: 'Corn', icon: cibIcq, value: 53 },
    { title: 'Rice', icon: cibIcq, value: 83 },
    { title: 'Barley', icon: cibIcq, value: 73 },
    { title: 'Oats', icon: cibIcq, value: 43 },
    { title: 'Wheat', icon: cibIcq, value: 27 },
    { title: 'Soybean', icon: cibIcq, value: 93 },
  ]
  const tableExample = [
    {
      avatar: { src: avatar7, status: 'success' },
      user: {
        name: 'Ultra Sonic Sensor',
        new: true,
        registered: 'June 1, 2023',
      },
      country: { name: 'USA', flag: cilPowerStandby },
      usage: {
        value: 80,
        period: 'Nov 11, 2023 - Dec 10, 2023',
        color: 'success',
      },
      payment: { name: 's', icon: cilCheck },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar8, status: 'danger' },
      user: {
        name: 'Nutrient Sensor',
        new: false,
        registered: 'June 10, 2023',
      },
      country: { name: 'Brazil', flag: cilPowerStandby },
      usage: {
        value: 62,
        period: 'Jun 11, 2023 - Jul 17, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cilCheck },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar9, status: 'success' },
      user: { name: 'Infrared Sensor', new: true, registered: 'May 7, 2023' },
      country: { name: 'India', flag: cilPowerStandby },
      usage: {
        value: 74,
        period: 'Aug 21, 2023 - Nov 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cilCheck },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar10, status: 'success' },
      user: { name: 'Crop Health Sensor', new: true, registered: 'Dec 8, 2023' },
      country: { name: 'France', flag: cilPowerStandby },
      usage: {
        value: 98,
        period: 'Dec 11, 2023 - Jan 10, 2024',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cilX },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar11, status: 'success' },
      user: {
        name: 'Weather Station Sensor',
        new: true,
        registered: 'June 9, 2023',
      },
      country: { name: 'Spain', flag: cilPowerStandby },
      usage: {
        value: 32,
        period: 'Jun 11, 2023 - Aug 24, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cilCheck },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar12, status: 'danger' },
      user: {
        name: 'Gps & Location Sensor',
        new: true,
        registered: 'Jan 1, 2024',
      },
      country: { name: 'Poland', flag: cilPowerStandby },
      usage: {
        value: 43,
        period: 'Jan 11, 2024 - Feb 10, 2024',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cilCheck },
      activity: '3 days ago',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Agri Tech User Dashbord Overview
              </h4>
              <div className="small text-medium-emphasis">July 2023 - January 2024</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Crop',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'Yield',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'Revenue',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts /> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Agri-Tech {' & '} Transformation</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Ultra Sonic Senssor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Nutrient Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Weather Station Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">GPS & Location Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Infrared Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Crop Health Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">LCD Display</div>
                        <div className="fs-5 fw-semibold">Deactive</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Alarm</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {/* {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))} */}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Sensors</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Power</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                    <CTableHeaderCell>Activity Log</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last Update</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  cibToggl,
  cisBatteryCharge,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cilCloud,
  cilSun,
  cilRain,
  cibMeteor,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibIcq,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilToggleOn,
  cidToggleOff,
  cilUserFemale,
  cilCheck,
  cilX,
  cilPowerStandby,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/s1.jpeg'
import avatar8 from 'src/assets/images/avatars/s2.jpeg'
import avatar9 from 'src/assets/images/avatars/s3.jpeg'
import avatar10 from 'src/assets/images/avatars/s4.jpeg'
import avatar11 from 'src/assets/images/avatars/s5.jpeg'
import avatar12 from 'src/assets/images/avatars/s6.png'

// import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Total Area', value: '29.703 Area', percent: 40, color: 'success' },
    { title: 'Total Crop', value: '24.093 Crop', percent: 20, color: 'info' },
    { title: 'Total Yield', value: '78.706 Yield', percent: 60, color: 'warning' },
    { title: 'Total Revenue', value: '22.123 Revenue', percent: 80, color: 'danger' },
    { title: 'Total plant', value: ' plant', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  // const progressGroupExample3 = [
  //   { title: 'Cloudy', icon: cilCloud, percent: 56, value: '' },
  //   { title: 'Sunny', icon: cilSun, percent: 15, value: '' },
  //   { title: 'Rainy', icon: cilRain, percent: 11, value: '' },
  //   { title: 'wind', icon: cibMeteor, percent: 8, value: '' },
  // ]
  const progressGroupExample2 = [
    { title: 'Corn', icon: cibIcq, value: 53 },
    { title: 'Rice', icon: cibIcq, value: 83 },
    { title: 'Barley', icon: cibIcq, value: 73 },
    { title: 'Oats', icon: cibIcq, value: 43 },
    { title: 'Wheat', icon: cibIcq, value: 27 },
    { title: 'Soybean', icon: cibIcq, value: 93 },
  ]
  const tableExample = [
    {
      avatar: { src: avatar7, status: 'success' },
      user: {
        name: 'Ultra Sonic Sensor',
        new: true,
        registered: 'June 1, 2023',
      },
      country: { name: 'USA', flag: cilPowerStandby },
      usage: {
        value: 80,
        period: 'Nov 11, 2023 - Dec 10, 2023',
        color: 'success',
      },
      payment: { name: 's', icon: cilCheck },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar8, status: 'danger' },
      user: {
        name: 'Nutrient Sensor',
        new: false,
        registered: 'June 10, 2023',
      },
      country: { name: 'Brazil', flag: cilPowerStandby },
      usage: {
        value: 62,
        period: 'Jun 11, 2023 - Jul 17, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cilCheck },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar9, status: 'success' },
      user: { name: 'Infrared Sensor', new: true, registered: 'May 7, 2023' },
      country: { name: 'India', flag: cilPowerStandby },
      usage: {
        value: 74,
        period: 'Aug 21, 2023 - Nov 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cilCheck },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar10, status: 'success' },
      user: { name: 'Crop Health Sensor', new: true, registered: 'Dec 8, 2023' },
      country: { name: 'France', flag: cilPowerStandby },
      usage: {
        value: 98,
        period: 'Dec 11, 2023 - Jan 10, 2024',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cilX },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar11, status: 'success' },
      user: {
        name: 'Weather Station Sensor',
        new: true,
        registered: 'June 9, 2023',
      },
      country: { name: 'Spain', flag: cilPowerStandby },
      usage: {
        value: 32,
        period: 'Jun 11, 2023 - Aug 24, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cilCheck },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar12, status: 'danger' },
      user: {
        name: 'Gps & Location Sensor',
        new: true,
        registered: 'Jan 1, 2024',
      },
      country: { name: 'Poland', flag: cilPowerStandby },
      usage: {
        value: 43,
        period: 'Jan 11, 2024 - Feb 10, 2024',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cilCheck },
      activity: '3 days ago',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Agri Tech User Dashbord Overview
              </h4>
              <div className="small text-medium-emphasis">July 2023 - January 2024</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Crop',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'Yield',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'Revenue',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts /> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Agri-Tech {' & '} Transformation</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Ultra Sonic Senssor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Nutrient Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Weather Station Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">GPS & Location Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Infrared Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Crop Health Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">LCD Display</div>
                        <div className="fs-5 fw-semibold">Deactive</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Alarm</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {/* {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))} */}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Sensors</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Power</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                    <CTableHeaderCell>Activity Log</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last Update</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  cibToggl,
  cisBatteryCharge,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cilCloud,
  cilSun,
  cilRain,
  cibMeteor,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibIcq,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilToggleOn,
  cidToggleOff,
  cilUserFemale,
  cilCheck,
  cilX,
  cilPowerStandby,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/s1.jpeg'
import avatar8 from 'src/assets/images/avatars/s2.jpeg'
import avatar9 from 'src/assets/images/avatars/s3.jpeg'
import avatar10 from 'src/assets/images/avatars/s4.jpeg'
import avatar11 from 'src/assets/images/avatars/s5.jpeg'
import avatar12 from 'src/assets/images/avatars/s6.png'

// import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Total Area', value: '29.703 Area', percent: 40, color: 'success' },
    { title: 'Total Crop', value: '24.093 Crop', percent: 20, color: 'info' },
    { title: 'Total Yield', value: '78.706 Yield', percent: 60, color: 'warning' },
    { title: 'Total Revenue', value: '22.123 Revenue', percent: 80, color: 'danger' },
    { title: 'Total plant', value: ' plant', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  // const progressGroupExample3 = [
  //   { title: 'Cloudy', icon: cilCloud, percent: 56, value: '' },
  //   { title: 'Sunny', icon: cilSun, percent: 15, value: '' },
  //   { title: 'Rainy', icon: cilRain, percent: 11, value: '' },
  //   { title: 'wind', icon: cibMeteor, percent: 8, value: '' },
  // ]
  const progressGroupExample2 = [
    { title: 'Corn', icon: cibIcq, value: 53 },
    { title: 'Rice', icon: cibIcq, value: 83 },
    { title: 'Barley', icon: cibIcq, value: 73 },
    { title: 'Oats', icon: cibIcq, value: 43 },
    { title: 'Wheat', icon: cibIcq, value: 27 },
    { title: 'Soybean', icon: cibIcq, value: 93 },
  ]
  const tableExample = [
    {
      avatar: { src: avatar7, status: 'success' },
      user: {
        name: 'Ultra Sonic Sensor',
        new: true,
        registered: 'June 1, 2023',
      },
      country: { name: 'USA', flag: cilPowerStandby },
      usage: {
        value: 80,
        period: 'Nov 11, 2023 - Dec 10, 2023',
        color: 'success',
      },
      payment: { name: 's', icon: cilCheck },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar8, status: 'danger' },
      user: {
        name: 'Nutrient Sensor',
        new: false,
        registered: 'June 10, 2023',
      },
      country: { name: 'Brazil', flag: cilPowerStandby },
      usage: {
        value: 62,
        period: 'Jun 11, 2023 - Jul 17, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cilCheck },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar9, status: 'success' },
      user: { name: 'Infrared Sensor', new: true, registered: 'May 7, 2023' },
      country: { name: 'India', flag: cilPowerStandby },
      usage: {
        value: 74,
        period: 'Aug 21, 2023 - Nov 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cilCheck },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar10, status: 'success' },
      user: { name: 'Crop Health Sensor', new: true, registered: 'Dec 8, 2023' },
      country: { name: 'France', flag: cilPowerStandby },
      usage: {
        value: 98,
        period: 'Dec 11, 2023 - Jan 10, 2024',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cilX },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar11, status: 'success' },
      user: {
        name: 'Weather Station Sensor',
        new: true,
        registered: 'June 9, 2023',
      },
      country: { name: 'Spain', flag: cilPowerStandby },
      usage: {
        value: 32,
        period: 'Jun 11, 2023 - Aug 24, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cilCheck },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar12, status: 'danger' },
      user: {
        name: 'Gps & Location Sensor',
        new: true,
        registered: 'Jan 1, 2024',
      },
      country: { name: 'Poland', flag: cilPowerStandby },
      usage: {
        value: 43,
        period: 'Jan 11, 2024 - Feb 10, 2024',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cilCheck },
      activity: '3 days ago',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Agri Tech User Dashbord Overview
              </h4>
              <div className="small text-medium-emphasis">July 2023 - January 2024</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Crop',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'Yield',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'Revenue',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts /> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Agri-Tech {' & '} Transformation</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Ultra Sonic Senssor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Nutrient Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Weather Station Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">GPS & Location Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Infrared Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Crop Health Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">LCD Display</div>
                        <div className="fs-5 fw-semibold">Deactive</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Alarm</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {/* {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))} */}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Sensors</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Power</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                    <CTableHeaderCell>Activity Log</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last Update</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  cibToggl,
  cisBatteryCharge,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cilCloud,
  cilSun,
  cilRain,
  cibMeteor,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibIcq,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilToggleOn,
  cidToggleOff,
  cilUserFemale,
  cilCheck,
  cilX,
  cilPowerStandby,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/s1.jpeg'
import avatar8 from 'src/assets/images/avatars/s2.jpeg'
import avatar9 from 'src/assets/images/avatars/s3.jpeg'
import avatar10 from 'src/assets/images/avatars/s4.jpeg'
import avatar11 from 'src/assets/images/avatars/s5.jpeg'
import avatar12 from 'src/assets/images/avatars/s6.png'

// import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Total Area', value: '29.703 Area', percent: 40, color: 'success' },
    { title: 'Total Crop', value: '24.093 Crop', percent: 20, color: 'info' },
    { title: 'Total Yield', value: '78.706 Yield', percent: 60, color: 'warning' },
    { title: 'Total Revenue', value: '22.123 Revenue', percent: 80, color: 'danger' },
    { title: 'Total plant', value: ' plant', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  // const progressGroupExample3 = [
  //   { title: 'Cloudy', icon: cilCloud, percent: 56, value: '' },
  //   { title: 'Sunny', icon: cilSun, percent: 15, value: '' },
  //   { title: 'Rainy', icon: cilRain, percent: 11, value: '' },
  //   { title: 'wind', icon: cibMeteor, percent: 8, value: '' },
  // ]
  const progressGroupExample2 = [
    { title: 'Corn', icon: cibIcq, value: 53 },
    { title: 'Rice', icon: cibIcq, value: 83 },
    { title: 'Barley', icon: cibIcq, value: 73 },
    { title: 'Oats', icon: cibIcq, value: 43 },
    { title: 'Wheat', icon: cibIcq, value: 27 },
    { title: 'Soybean', icon: cibIcq, value: 93 },
  ]
  const tableExample = [
    {
      avatar: { src: avatar7, status: 'success' },
      user: {
        name: 'Ultra Sonic Sensor',
        new: true,
        registered: 'June 1, 2023',
      },
      country: { name: 'USA', flag: cilPowerStandby },
      usage: {
        value: 80,
        period: 'Nov 11, 2023 - Dec 10, 2023',
        color: 'success',
      },
      payment: { name: 's', icon: cilCheck },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar8, status: 'danger' },
      user: {
        name: 'Nutrient Sensor',
        new: false,
        registered: 'June 10, 2023',
      },
      country: { name: 'Brazil', flag: cilPowerStandby },
      usage: {
        value: 62,
        period: 'Jun 11, 2023 - Jul 17, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cilCheck },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar9, status: 'success' },
      user: { name: 'Infrared Sensor', new: true, registered: 'May 7, 2023' },
      country: { name: 'India', flag: cilPowerStandby },
      usage: {
        value: 74,
        period: 'Aug 21, 2023 - Nov 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cilCheck },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar10, status: 'success' },
      user: { name: 'Crop Health Sensor', new: true, registered: 'Dec 8, 2023' },
      country: { name: 'France', flag: cilPowerStandby },
      usage: {
        value: 98,
        period: 'Dec 11, 2023 - Jan 10, 2024',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cilX },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar11, status: 'success' },
      user: {
        name: 'Weather Station Sensor',
        new: true,
        registered: 'June 9, 2023',
      },
      country: { name: 'Spain', flag: cilPowerStandby },
      usage: {
        value: 32,
        period: 'Jun 11, 2023 - Aug 24, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cilCheck },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar12, status: 'danger' },
      user: {
        name: 'Gps & Location Sensor',
        new: true,
        registered: 'Jan 1, 2024',
      },
      country: { name: 'Poland', flag: cilPowerStandby },
      usage: {
        value: 43,
        period: 'Jan 11, 2024 - Feb 10, 2024',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cilCheck },
      activity: '3 days ago',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Agri Tech User Dashbord Overview
              </h4>
              <div className="small text-medium-emphasis">July 2023 - January 2024</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Crop',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'Yield',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'Revenue',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts /> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Agri-Tech {' & '} Transformation</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Ultra Sonic Senssor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Nutrient Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Weather Station Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">GPS & Location Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Infrared Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Crop Health Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">LCD Display</div>
                        <div className="fs-5 fw-semibold">Deactive</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Alarm</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {/* {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))} */}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Sensors</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Power</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                    <CTableHeaderCell>Activity Log</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last Update</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  cibToggl,
  cisBatteryCharge,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cilCloud,
  cilSun,
  cilRain,
  cibMeteor,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibIcq,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilToggleOn,
  cidToggleOff,
  cilUserFemale,
  cilCheck,
  cilX,
  cilPowerStandby,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/s1.jpeg'
import avatar8 from 'src/assets/images/avatars/s2.jpeg'
import avatar9 from 'src/assets/images/avatars/s3.jpeg'
import avatar10 from 'src/assets/images/avatars/s4.jpeg'
import avatar11 from 'src/assets/images/avatars/s5.jpeg'
import avatar12 from 'src/assets/images/avatars/s6.png'

// import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Total Area', value: '29.703 Area', percent: 40, color: 'success' },
    { title: 'Total Crop', value: '24.093 Crop', percent: 20, color: 'info' },
    { title: 'Total Yield', value: '78.706 Yield', percent: 60, color: 'warning' },
    { title: 'Total Revenue', value: '22.123 Revenue', percent: 80, color: 'danger' },
    { title: 'Total plant', value: ' plant', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  // const progressGroupExample3 = [
  //   { title: 'Cloudy', icon: cilCloud, percent: 56, value: '' },
  //   { title: 'Sunny', icon: cilSun, percent: 15, value: '' },
  //   { title: 'Rainy', icon: cilRain, percent: 11, value: '' },
  //   { title: 'wind', icon: cibMeteor, percent: 8, value: '' },
  // ]
  const progressGroupExample2 = [
    { title: 'Corn', icon: cibIcq, value: 53 },
    { title: 'Rice', icon: cibIcq, value: 83 },
    { title: 'Barley', icon: cibIcq, value: 73 },
    { title: 'Oats', icon: cibIcq, value: 43 },
    { title: 'Wheat', icon: cibIcq, value: 27 },
    { title: 'Soybean', icon: cibIcq, value: 93 },
  ]
  const tableExample = [
    {
      avatar: { src: avatar7, status: 'success' },
      user: {
        name: 'Ultra Sonic Sensor',
        new: true,
        registered: 'June 1, 2023',
      },
      country: { name: 'USA', flag: cilPowerStandby },
      usage: {
        value: 80,
        period: 'Nov 11, 2023 - Dec 10, 2023',
        color: 'success',
      },
      payment: { name: 's', icon: cilCheck },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar8, status: 'danger' },
      user: {
        name: 'Nutrient Sensor',
        new: false,
        registered: 'June 10, 2023',
      },
      country: { name: 'Brazil', flag: cilPowerStandby },
      usage: {
        value: 62,
        period: 'Jun 11, 2023 - Jul 17, 2023',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cilCheck },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar9, status: 'success' },
      user: { name: 'Infrared Sensor', new: true, registered: 'May 7, 2023' },
      country: { name: 'India', flag: cilPowerStandby },
      usage: {
        value: 74,
        period: 'Aug 21, 2023 - Nov 10, 2023',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cilCheck },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar10, status: 'success' },
      user: { name: 'Crop Health Sensor', new: true, registered: 'Dec 8, 2023' },
      country: { name: 'France', flag: cilPowerStandby },
      usage: {
        value: 98,
        period: 'Dec 11, 2023 - Jan 10, 2024',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cilX },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar11, status: 'success' },
      user: {
        name: 'Weather Station Sensor',
        new: true,
        registered: 'June 9, 2023',
      },
      country: { name: 'Spain', flag: cilPowerStandby },
      usage: {
        value: 32,
        period: 'Jun 11, 2023 - Aug 24, 2023',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cilCheck },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar12, status: 'danger' },
      user: {
        name: 'Gps & Location Sensor',
        new: true,
        registered: 'Jan 1, 2024',
      },
      country: { name: 'Poland', flag: cilPowerStandby },
      usage: {
        value: 43,
        period: 'Jan 11, 2024 - Feb 10, 2024',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cilCheck },
      activity: '3 days ago',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Agri Tech User Dashbord Overview
              </h4>
              <div className="small text-medium-emphasis">July 2023 - January 2024</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Crop',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'Yield',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'Revenue',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts /> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Agri-Tech {' & '} Transformation</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">Ultra Sonic Senssor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Nutrient Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Weather Station Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">GPS & Location Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Infrared Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Crop Health Sensor</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">LCD Display</div>
                        <div className="fs-5 fw-semibold">Deactive</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Alarm</div>
                        <div className="fs-5 fw-semibold">Active</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {/* {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))} */}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Sensors</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Power</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                    <CTableHeaderCell>Activity Log</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last Update</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard

export default Dashboard
