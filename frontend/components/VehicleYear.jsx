import { Component } from 'react';
import { connect } from 'react-redux';
import { yearChosen } from '../actions';
import { SELECTOR_PLACEHOLDER } from '../constants';

export class VehicleYear extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const params = {
      category: this.props.selectedCategory,
      id: this.props.selectedBrand,
      idModel: this.props.selectedModel,
      idYear: event.target.value,
    }
    this.props.yearChosen(params);
  }

  render() {
    return (
      <div className="form-group col-md-2">
        <label htmlFor="inputYear">Ano</label>
        <select value={this.props.selectVal} id="inputYear" className='form-control' onChange={this.handleChange} disabled={this.props.isDisabled}>
          <option disabled value={SELECTOR_PLACEHOLDER}>{SELECTOR_PLACEHOLDER}</option>
            {this.props.years.map(el => (
              <option value={el.id}>{el.name}</option>
            ))}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  years: state.availableYears,
  isDisabled: state.yearsDisabled,
  selectVal: state.selectedYear,
  selectedCategory: state.selectedCategory,
  selectedBrand: state.selectedBrand,
  selectedModel: state.selectedModel,
});

const mapDispatchToProps = dispatch => ({
  yearChosen: year => dispatch(yearChosen(year)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VehicleYear);
