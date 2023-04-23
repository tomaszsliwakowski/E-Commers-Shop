import React from "react";
import Footer from ".";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const FooterSection = () => {
  return (
    <Footer>
      <Footer.Top>
        <Footer.AboutUs>
          <Footer.Title>Shop</Footer.Title>
          <Footer.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            necessitatibus eos minima hic odio soluta, tempore sed, alias autem
            provident, sit repudiandae natus laboriosam molestias quo commodi
            ipsam dolorem obcaecati!
          </Footer.Text>
        </Footer.AboutUs>
        <Footer.Contact>
          <Footer.Title>Contact</Footer.Title>
          <Footer.List>
            <Footer.ContactOption>
              <FaPhoneAlt />
              456-345-342
            </Footer.ContactOption>
            <Footer.ContactOption>
              <MdEmail />
              <Footer.Link href="mailto:Shop@gmail.com">
                Shop@gmail.com
              </Footer.Link>
            </Footer.ContactOption>
            <Footer.ContactOption>
              <Footer.Link
                href="https://www.facebook.com/"
                style="rgb(0, 130, 250)"
              >
                <BsFacebook />
              </Footer.Link>
              <Footer.Link
                href="https://www.instagram.com/"
                style="rgb(193,53,132)"
              >
                <AiFillInstagram />
              </Footer.Link>
              <Footer.Link href="https://www.youtube.com/" style="red">
                <BsYoutube />
              </Footer.Link>
              <Footer.Link href="https://twitter.com/" style="rgb(0, 130, 250)">
                <BsTwitter />
              </Footer.Link>
            </Footer.ContactOption>
          </Footer.List>
        </Footer.Contact>
      </Footer.Top>
      <Footer.Bottom>
        <Footer.Copyright>©Shop {new Date().getFullYear()}</Footer.Copyright>
      </Footer.Bottom>
    </Footer>
  );
};

export default FooterSection;
