import styles from "../Styles/styles"
import { HeroSlider } from '../components'
import Helmet from "../components/Helmet/Helmet";

export const Home = () => {
  return (

/* ============= hero section =========== */
  <div className='bg-primary w-full overflow-hidden'>
      <main className='mt-1 p-12 w-full '>
          <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Helmet title="Home">
                  <section className={`mb-60 p-0 hero__slider-section`}>
                    <HeroSlider />
                  </section>
                </Helmet>
              </div>
          </div>
      </main>
    </div>
  )
}

export default Home