import { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, categoryChosen } from '../actions';
import { SELECTOR_PLACEHOLDER } from '../constants';

export class VehiclesCategory extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.categoryChosen(event.target.value);
  }

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div className="form-group offset-md-2 col-md-2">
        <label htmlFor="inputCategory">Categoria</label>
        <select id="inputCategory" className="form-control" onChange={this.handleChange}>
          <option selected disabled>{SELECTOR_PLACEHOLDER}</option>
            {this.props.categories.map(el => (
              <option value={el}>{el}</option>
            ))}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  categoryChosen: category => dispatch(categoryChosen(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VehiclesCategory);
