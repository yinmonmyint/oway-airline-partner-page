import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { partners } from "../constants/constant";
import Promotion from "./Promotion";
import CompanyOverview from "./CompanyOverview";
import Title from "./Title";
import PopularRoute from "./PopularRoute";
import PopularCities from "./PopularCities";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";
import TermsAndCondition from "./TermsAndCondition";
import Footer from "./Footer";
import PopularAirline from "./PopularAirline";


class PartnerPage extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }
  componentDidMount() {
    const urlParam = this.props.match.params.partnerName;
    const result = partners.filter((partner) => partner.keyword == urlParam);
    this.setState(result[0]);
  }
  render() {
    return (
      <div> 
        <Title name={this.state.name} />
        <CompanyOverview overview={this.state.overview} />
        <FrequentlyAskedQuestion faq={this.state.faq} />
        <Promotion promotion={this.state.promotion} />
        <PopularCities popular_cities={this.state.popular_cities} />
        <PopularAirline />
        <PopularRoute popular_routes={this.state.popular_routes}/>
        <TermsAndCondition terms_and_conditions={this.state.terms_and_conditions} policy={this.state.policy} baggage_and_fees={this.state.baggage_and_fees} />
        <Footer />
      </div>
    );
  }
}
export default withRouter(PartnerPage);