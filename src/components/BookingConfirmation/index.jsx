import { MdCheck } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { MdCardGiftcard } from "react-icons/md";
import style from './style.module.css'

export default function BookingConfirmation({guests, date, time, occasion}) {
  return (
      <div className={style.booking}>
        <div className={style['booking-header']}>
          <div className={style['success-icon']}>
            <MdCheck size={36}/>
          </div>
          <h1 className={style['booking-title']}>Booking Confirmed!</h1>
          <p className={style['booking-subtitle']}>
            Thank you for your reservation. We&apos;re excited to host you!
          </p>
        </div>

        <div className={style['details-container']}>
          <h2 className={style['details-title']}>Reservation Details</h2>

          <div className={style['detail-item']}>
            <MdGroup size={40}/>
            <div className={style['detail-content']}>
              <p className={style['detail-label']}>Number of Guests</p>
              <p className={style['detail-value']}>{guests} people</p>
            </div>
          </div>

          <div className={style['detail-item']}>
            <MdCalendarToday size={40}/>
            <div className={style['detail-content']}>
              <p className={style['detail-label']}>Date</p>
              <p className={style['detail-value']}>{date}</p>
            </div>
          </div>

          <div className={style['detail-item']}>
            <MdAccessTime size={40}/>
            <div className={style['detail-content']}>
              <p className={style['detail-label']}>Time</p>
              <p className={style['detail-value']}>{time}</p>
            </div>
          </div>

          <div className={style['detail-item']}>
            <MdCardGiftcard size={40}/>
            <div className={style['detail-content']}>
              <p className={style['detail-label']}>Occasion</p>
              <p className={style['detail-value']}>{occasion}</p>
            </div>
          </div>
        </div>

        <div className={style['booking-footer']}>
          <p className={style['confirmation-text']}>
            A confirmation email has been sent to your inbox.
          </p>
          <p className={style.reference}>
            <span className={style['reference-label']}>Booking Reference:</span>
            <span className={style['reference-number']}>BK-2025011001</span>
          </p>
        </div>
      </div>
  )
}
