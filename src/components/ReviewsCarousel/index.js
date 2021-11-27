import {Component} from 'react'

import './index.css'

const EachReviews = props => {
  const {reviewsList, indexNo, previousReview, nextReview} = props
  const reviewsListLength = reviewsList.length
  const {username} = reviewsList[indexNo]
  const OnPreviousReview = () => {
    previousReview()
  }

  const OnNextReview = () => {
    nextReview(reviewsListLength)
  }

  return (
    <div className="change-reviews-container">
      <button type="button" className="arrow-button" testid="leftArrow">
        {' '}
        <img
          src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
          alt="left arrow"
          onClick={OnPreviousReview}
        />
      </button>

      <p className="user-name"> {username} </p>
      <button type="button" className="arrow-button" testid="rightArrow">
        {' '}
        <img
          src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
          onClick={OnNextReview}
          alt="right arrow"
        />
      </button>
    </div>
  )
}

class ReviewsCarousel extends Component {
  state = {
    indexNo: 0,
  }

  previousReview = () => {
    this.setState(prevState => {
      if (prevState.indexNo !== 0) {
        return {indexNo: prevState.indexNo - 1}
      }
      return {indexNo: 0}
    })
  }

  nextReview = reviewsListLength => {
    this.setState(prevState => {
      if (prevState.indexNo !== reviewsListLength - 1) {
        return {indexNo: prevState.indexNo + 1}
      }
      return {indexNo: reviewsListLength - 1}
    })
  }

  render() {
    const {indexNo} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[indexNo]

    return (
      <div className="reviews-carousel-bcg-container">
        <div className="reviews-carousel-container">
          <h1 className="reviews-heading"> Reviews </h1>
          <img src={imgUrl} alt={username} />
          <EachReviews
            reviewsList={reviewsList}
            indexNo={indexNo}
            previousReview={this.previousReview}
            nextReview={this.nextReview}
          />

          <p className="company-name"> {companyName} </p>
          <p className="review-description"> {description} </p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
