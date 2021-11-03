import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hàng",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    },
]

const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <Grid col={4} mdCol={2} smCol={1} gap={10}>
            <div>
              <div className="footer__title">
                  Tổng đà hỗ trợ
              </div>
              <div className="footer__content">
                <p>
                    Liên hệ đặt hàng <strong>0961899127</strong>
                </p>
                <p>
                    Thắc mắc đơn hàng <strong>0899488142</strong>
                </p>
                <p>
                    Góp ý, khiếu nại <strong>0899488142</strong>
                </p>
              </div>
            </div>
            <div>
              <div className="footer__title">
                  Về QC Perfume Shop
              </div>
              <div className="footer__content">
                  {
                    footerAboutLinks.map((item, index) => (
                      <p key={index}>
                          <Link to={item.path}>
                              {item.display}
                          </Link>
                      </p>
                    ))
                  }
              </div>
            </div>
            <div>
              <div className="footer__title">
                  Chăm sóc khách hàng
              </div>
              <div className="footer__content">
                  {
                    footerCustomerLinks.map((item, index) => (
                      <p key={index}>
                          <Link to={item.path}>
                              {item.display}
                          </Link>
                      </p>
                    ))
                  }
              </div>
            </div>
            <div className="footer__about">
                <p>
                    <Link to="/">
                        <img src={logo} className="footer__logo" alt="" />
                    </Link>
                </p>
                <p>
                    Hướng đến mục tiêu mang lại những chai nước hoa đẳng cấp cho người tiêu dùng Việt. Hãy cùng QC Perfume Shop hướng đến sự lịch lãm, quý phái. UY TÍN LÀM NÊN THƯƠNG HIỆU.
                </p>
            </div>
          </Grid>
        </div>
      </footer>
    );
}

export default Footer
