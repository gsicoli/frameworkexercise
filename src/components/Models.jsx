import { Component } from 'react';
import { connect } from 'react-redux';
import { modelChosen } from '../actions';
import { SELECTOR_PLACEHOLDER } from '../constants';

export class Models extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const params = {
      category: this.props.selectedCategory,
      id: this.props.selectedBrand,
      idModel: event.target.value,
    }
    this.props.modelChosen(params);
  }

  render() {
    return (
      <div className="form-group col-md-2">
        <label htmlFor="inputModel">Modelo</label>
        <select value={this.props.selectVal} id="inputModel" className='form-control' onChange={this.handleChange} disabled={this.props.isDisabled}>
          <option disabled value={SELECTOR_PLACEHOLDER}>{SELECTOR_PLACEHOLDER}</option>
            {this.props.models.map(el => (
              <option value={el.id}>{el.name}</option>
            ))}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  models: state.availableModels,
  isDisabled: state.modelsDisabled,
  selectVal: state.selectedModel,
  selectedCategory: state.selectedCategory,
  selectedBrand: state.selectedBrand,
});

const mapDispatchToProps = dispatch => ({
  modelChosen: model => dispatch(modelChosen(model)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Models);
