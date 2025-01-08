import Footer from "../Footer";
import Header from "../Header";
import style from './style.module.css'

export default function PageLayout({children}) {
  return (
    <div className={style.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
