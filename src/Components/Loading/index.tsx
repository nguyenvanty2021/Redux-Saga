import { Spin } from 'antd'
import { useSelector } from 'react-redux'
import './Loading.css'
export default function Loading() {
  const loading = useSelector((state: any) => state.loading)
  return (
    <div
      className="loading-container"
      style={{
        display: loading ? 'flex' : 'none',
      }}
    >
      <Spin
        size="large"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}
