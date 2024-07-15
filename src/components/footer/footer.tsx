import React from "react";
import classes from "./footer.module.css";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className={classes.footer_main_container}>
      <div className={classes.footer_center}>
        <div className={classes.footer_top_container}>
          <div className={classes.logo_div}>
            <h2>Food Mart</h2>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
          <div className={classes.sections}>
            <p>
              <b>О компании</b>
            </p>
            <ul>
              <li>Партнерам</li>
              <li>Вакансии</li>
              <li>Наши магазины</li>
              <li>Клубная карта</li>
              <li>Мобильное приложение</li>
            </ul>
          </div>
          <div className={classes.sections}>
            <p>
              <b>Покупателям</b>
            </p>
            <ul>
              <li>Условия доставки и оплата</li>
              <li>Возврат</li>
              <li>Политика конфидециальности</li>
              <li>Условия и положения</li>
              <li>Часто задаваемые вопросы</li>
            </ul>
          </div>
          <div className={classes.contacts}>
            <div className={classes.social_media}>
              <Image
                src="/assets/facebook.png"
                alt="facebook"
                width={20}
                height={20}
              />

              <Image
                src="/assets/instagram.png"
                alt="facebook"
                width={20}
                height={20}
              />

              <Image
                src="/assets/youtube.png"
                alt="facebook"
                width={20}
                height={20}
              />
            </div>
            <div className={classes.number}>
              <p>
                <b>+ 7 925 659-56-99</b>
              </p>
              <span>
                По всем вопросам и предложениям звонить с 09։00 до 23։00
              </span>
            </div>
          </div>
        </div>
        <div className={classes.footer_bottom_container}>
            <p>© ООО «Фудмарт», 2020 Все права защищены</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
