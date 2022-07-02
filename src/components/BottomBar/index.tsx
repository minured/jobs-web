import { useState } from 'react'
import cn from 'classnames'
import styles from './index.scss'
import { tabs } from './config'

const BottomBar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].key)

  return (
    <div className={styles.bottomBar}>
      {tabs.map((item, index) => (
        <div
          key={index}
          className={cn(
            styles.tabItem,
            activeTab === item.key && styles.active,
          )}
          onClick={() => setActiveTab(item.key)}
        >
          <div className={styles.icon}>
            {/* <img src={item.icon} alt=""/> */}
          </div>
          <div className={styles.text}>{item.title}</div>
        </div>
      ))}
    </div>
  )
}

export default BottomBar
