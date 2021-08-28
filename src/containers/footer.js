import React from "react";
import { Footer } from "../compnents";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Question? Contact us</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link hreff="#">FAQ</Footer.Link>
          <Footer.Link hreff="#">Investor Relation</Footer.Link>
          <Footer.Link hreff="#">Ways to Watch</Footer.Link>
          <Footer.Link hreff="#">Coporate Information</Footer.Link>
          <Footer.Link hreff="#">Netflix Orginals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link hreff="#">Help cCenter</Footer.Link>
          <Footer.Link hreff="#">Jobs</Footer.Link>
          <Footer.Link hreff="#">Terms of Use</Footer.Link>
          <Footer.Link hreff="#">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link hreff="#">Account</Footer.Link>
          <Footer.Link hreff="#">Redeem Gift Cards</Footer.Link>
          <Footer.Link hreff="#">Terms of Use</Footer.Link>
          <Footer.Link hreff="#">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link hreff="#">Media Center</Footer.Link>
          <Footer.Link hreff="#">Redeem Gift Cards</Footer.Link>
          <Footer.Link hreff="#">Terms of Use</Footer.Link>
          <Footer.Link hreff="#">Contact Us</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix United Kingdom</Footer.Text>
    </Footer>
  );
}
