import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Switch from "../elements/Switch";
import Button from "../elements/Button";

const propTypes = {
  ...SectionTilesProps.types,
  pricingSwitcher: PropTypes.bool,
  pricingSlider: PropTypes.bool
};

const defaultProps = {
  ...SectionTilesProps.defaults,
  pricingSwitcher: false,
  pricingSlider: false
};

class Pricing extends React.Component {
  slider = React.createRef();
  sliderValue = React.createRef();

  componentDidMount() {
    if (this.props.pricingSlider) {
      this.slider.current.setAttribute("min", 0);
      this.slider.current.setAttribute(
        "max",
        Object.keys(this.state.priceInput).length - 1
      );
      this.thumbSize = parseInt(
        window
          .getComputedStyle(this.sliderValue.current)
          .getPropertyValue("--thumb-size"),
        10
      );
      this.handleSliderValuePosition(this.slider.current);
    }
  }

  handlePricingSwitch = e => {
    this.setState({ priceChangerValue: e.target.checked ? "1" : "0" });
  };

  handlePricingSlide = e => {
    this.setState({ priceChangerValue: e.target.value });
    this.handleSliderValuePosition(e.target);
  };

  handleSliderValuePosition = input => {
    const multiplier = input.value / input.max;
    const thumbOffset = this.thumbSize * multiplier;
    const priceInputOffset =
      (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
    this.sliderValue.current.style.left =
      input.clientWidth * multiplier - thumbOffset + priceInputOffset + "px";
  };

  getPricingData = (values, set) => {
    return set !== undefined
      ? values[this.state.priceChangerValue][set]
      : values[this.state.priceChangerValue];
  };

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      pricingSwitcher,
      pricingSlider,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "pricing section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "pricing-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    const sectionHeader = {
      title: " ",
      paragraph: ""
    };

    return (
      <section {...props} className={outerClasses}>
        <br />
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            {pricingSwitcher && (
              <div className="pricing-switcher center-content">
                {/* <Switch
                  checked={this.state.priceChangerValue === '1' ? true : false}
                  onChange={this.handlePricingSwitch}
                  rightLabel="Billed Annually">
                    Billed Monthly
                </Switch> */}
              </div>
            )}
            {pricingSlider && (
              <div className="pricing-slider center-content">
                {/* <label className="form-slider">
                  <span className="mb-16">How many users do you have?</span>
                  <input
                    type="range"
                    ref={this.slider}
                    defaultValue={this.state.priceChangerValue}
                    onChange={this.handlePricingSlide}
                  />
                </label> */}
                <div ref={this.sliderValue} className="pricing-slider-value">
                  {this.getPricingData(this.state.priceInput)}
                </div>
              </div>
            )}
            <div className={tilesClasses}>
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
              >
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-16 mb-24">
                      {/* <div className="pricing-item-price"> */}
                        {/* <span className="pricing-item-price-currency h2">
                          {this.getPricingData(this.state.priceOutput.plan1, 0)}
                        </span>
                        <span className="pricing-item-price-amount h1">
                          {this.getPricingData(this.state.priceOutput.plan1, 1)}
                        </span> */}
                        <span className="h5">State Covid Control Room</span>
                      {/* </div> */}
                    </div>
                    <div className="pricing-item-features mb-40">
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        104
                      </ul>
                      <Button tag="a" color="primary" wide href="tel:104">
                        Dial
                      </Button>
                      <br />
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        1075
                      </ul>
                      <Button tag="a" color="primary" wide href="tel:1075">
                        Dial
                      </Button>
                      <br />
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        080-46848600
                      </ul>
                      <Button
                        tag="a"
                        color="primary"
                        wide
                        href="tel:080-46848600"
                      >
                        Dial
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
                data-reveal-delay="150"
              >
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price">
                        <span className="h5">Food and civil suppliers</span>
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        1967
                      </ul>
                      <Button tag="a" color="primary" wide href="tel:104">
                        Dial
                      </Button>
                      <br />
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        180-425-9339
                      </ul>
                      <Button
                        tag="a"
                        color="primary"
                        wide
                        href="tel:180-425-9339"
                      >
                        Dial
                      </Button>
                      <br />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
                data-reveal-delay="300"
              >
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price">
                        {/* <span className="pricing-item-price-currency h2">
                          {this.getPricingData(this.state.priceOutput.plan3, 0)}
                        </span> */}
                        {/* <span className="pricing-item-price-amount h1">
                          {this.getPricingData(this.state.priceOutput.plan3, 1)}
                        </span> */}
                        <span className="h5">Ambulance</span>
                      </div>
                      {/* <div className="text-color-low text-xs">
                        per month, billed {this.getPricingData(this.state.priceOutput.plan3, 2)}
                      </div> */}
                    </div>
                    <div className="pricing-item-features mb-40">
                      {/* <div className="pricing-item-features-title fw-500 text-xs text-color-mid mb-24">
                        What’s included
                      </div> */}
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        102
                      </ul>
                      <Button tag="a" color="primary" wide href="tel:102">
                        Dial
                      </Button>
                      <br />
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        108
                      </ul>
                      <Button tag="a" color="primary" wide href="tel:108">
                        Dial
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
                data-reveal-delay="300"
              >
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price">
                        {/* <span className="pricing-item-price-currency h2">
                          {this.getPricingData(this.state.priceOutput.plan3, 0)}
                        </span> */}
                        {/* <span className="pricing-item-price-amount h1">
                          {this.getPricingData(this.state.priceOutput.plan3, 1)}
                        </span> */}
                        <span className="h5">
                          Bangalore Urban Covid Control Room
                        </span>
                      </div>
                      {/* <div className="text-color-low text-xs">
                        per month, billed {this.getPricingData(this.state.priceOutput.plan3, 2)}
                      </div> */}
                    </div>
                    <div className="pricing-item-features mb-40">
                      {/* <div className="pricing-item-features-title fw-500 text-xs text-color-mid mb-24">
                        What’s included
                      </div> */}
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        080-1077
                      </ul>
                      <Button tag="a" color="primary" wide href="tel:080-1077">
                        Dial
                      </Button>
                      <br />
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        080-22967200
                      </ul>
                      <Button
                        tag="a"
                        color="primary"
                        wide
                        href="tel:080-22967200"
                      >
                        Dial
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
                data-reveal-delay="300"
              >
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price">
                        {/* <span className="pricing-item-price-currency h2">
                          {this.getPricingData(this.state.priceOutput.plan3, 0)}
                        </span> */}
                        {/* <span className="pricing-item-price-amount h1">
                          {this.getPricingData(this.state.priceOutput.plan3, 1)}
                        </span> */}
                        <span className="h5">
                          Bangalore Rural Covid Control Room
                        </span>
                      </div>
                      {/* <div className="text-color-low text-xs">
                        per month, billed {this.getPricingData(this.state.priceOutput.plan3, 2)}
                      </div> */}
                    </div>
                    <div className="pricing-item-features mb-40">
                      {/* <div className="pricing-item-features-title fw-500 text-xs text-color-mid mb-24">
                        What’s included
                      </div> */}
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        080-29781021
                      </ul>
                      <Button
                        tag="a"
                        color="primary"
                        wide
                        href="tel:080-29781021"
                      >
                        Dial
                      </Button>
                      <br />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
                data-reveal-delay="300"
              >
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price">
                        {/* <span className="pricing-item-price-currency h2">
                          {this.getPricingData(this.state.priceOutput.plan3, 0)}
                        </span> */}
                        {/* <span className="pricing-item-price-amount h1">
                          {this.getPricingData(this.state.priceOutput.plan3, 1)}
                        </span> */}
                        <span className="h5">
                          Denial of admission to hospitals and BBMP
                        </span>
                      </div>
                      {/* <div className="text-color-low text-xs">
                        per month, billed {this.getPricingData(this.state.priceOutput.plan3, 2)}
                      </div> */}
                    </div>
                    <div className="pricing-item-features mb-40">
                      {/* <div className="pricing-item-features-title fw-500 text-xs text-color-mid mb-24">
                        What’s included
                      </div> */}
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        1912
                      </ul>
                      <Button tag="a" color="primary" wide href="tel:1912">
                        Dial
                      </Button>
                      <br />
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        BBMP: 080-22660000
                      </ul>
                      <Button
                        tag="a"
                        color="primary"
                        wide
                        href="tel:080-22660000"
                      >
                        Dial
                      </Button>
                      <br />
                      {/* <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        0821-1077
                      </ul>
                      <Button tag="a" color="primary" wide href="tel:0821-1077">
                        Dial
                      </Button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;
