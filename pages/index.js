import Head from 'next/head'
import Image from 'next/image'
import MealList from '../components/MealList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Meal Planner</title>
        <meta name="description" content="The stress free solution to knowing what's for dinner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MealList/>

    </div>
  )
}
