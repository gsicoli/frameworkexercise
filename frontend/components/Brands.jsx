import { Component } from 'react';
import { connect } from 'react-redux';
import { brandChosen } from '../actions';
import { SELECTOR_PLACEHOLDER } from '../constants';

export class Brands extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const params = {
      category: this.props.selectedCategory,
      id: event.target.value,
    }
    this.props.brandChosen(params);
  }

  render() {
    return (
      <div className="form-group col-md-2">
        <label htmlFor="inputBrand">Marca</label>
        <select value={this.props.selectVal} id="inputBrand" className='form-control' onChange={this.handleChange} disabled={this.props.isDisabled}>
          <option disabled value={SELECTOR_PLACEHOLDER}>{SELECTOR_PLACEHOLDER}</option>
            {this.props.brands.map(el => (
              <option value={el.id}>{el.name}</option>
            ))}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  brands: state.availableBrands,
  isDisabled: state.brandsDisabled,
  selectVal: state.selectedBrand,
  selectedCategory: state.selectedCategory,
});

const mapDispatchToProps = dispatch => ({
  brandChosen: brand => dispatch(brandChosen(brand)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Brands);
