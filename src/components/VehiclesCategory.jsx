import { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../actions';

export class VehiclesCategory extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="form-group col-md-2">
        <label htmlFor="inputCategory">Category</label>
        <select id="inputCategory" className="form-control">
          <option selected>Choose...</option>
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

export default connect(
  mapStateToProps,
  { getCategories },
)(VehiclesCategory);
