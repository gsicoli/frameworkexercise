import { Component } from 'react';
import { connect } from 'react-redux';
import { SELECTOR_PLACEHOLDER } from '../constants';

export class Brands extends Component {
  render() {
    return (
      <div className="form-group col-md-2">
        <label htmlFor="inputBrand">Marca</label>
        <select id="inputBrand" className='form-control' disabled={this.props.isDisabled}>
          <option selected>{SELECTOR_PLACEHOLDER}</option>
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
});

export default connect(mapStateToProps)(Brands);
