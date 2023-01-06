import Image from 'next/image'

import styles from './styles.module.scss'

import signal from './assets/signal.svg'

const UserNotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.signal}>
          <Image src={signal} alt='Error' />
        </div>

        <div className={styles.error}>
          The user has't been found in our Database.
        </div>
      </div>
    </div>
  )
}

export default UserNotFound