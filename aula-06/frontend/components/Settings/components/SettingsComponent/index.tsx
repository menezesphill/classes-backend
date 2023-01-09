import Image from 'next/image'

import styles from './styles.module.scss'

import julia from './assets/julia.svg'

import { useState, useEffect } from 'react'
import { getUserData } from '../../../../services'

const SettingsComponent = () => {

  const [ user, setUser ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ cpf, setCpf ] = useState('')

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = () => {
    let API_URL = "http://localhost:3031"
    try {
      getUserData(API_URL)
      .then((response) => {
        setUser(response.data.name)
        setEmail(response.data.email)
        setCpf(response.data.cpf)
      })
    } catch (e) {
      alert("ERROR:" + e)
    }
  }

  // count => count+1

  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.profile}>
            <div className={styles.imageContainer}>
              <Image src={julia} alt='Profile' />
            </div>

            <div className={styles.nameContainer}>
              {user}
            </div>
          </div>

          <div className={styles.userSettings}>
            <div className={styles.userData}>
              <div className={styles.dataContainer}>
                <div className={styles.label}>
                  Username
                </div>

                <div className={styles.data}>
                  {user}
                </div>

                <div className={styles.line}/>
              </div>

              <div className={styles.dataContainer}>
                <div className={styles.label}>
                  Email
                </div>

                <div className={styles.data}>
                  {email}
                </div>

                <div className={styles.line} />
              </div>

              <div className={styles.dataContainer}>
                <div className={styles.label}>
                  CPF
                </div>
                
                <div className={styles.data}>
                  {cpf}
                </div>

                <div className={styles.line} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsComponent