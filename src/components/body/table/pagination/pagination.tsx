import React from "react";
import "./pagination.css";
import { variables } from "../../../../context";
import ReversebillingType from "../../../../types/reversebilling";
import Button from "../../../button/button";
import next from "../../../../assets/icon/next.svg";
import previous from "../../../../assets/icon/Previous.svg";
import prevfirst from "../../../../assets/icon/prevfirst.svg";
import nextlast from "../../../../assets/icon/nextlast.svg";

type PaginationProps = {
  totalItem: number;
  onPageSizeChange?: (num: number) => void;
  onCurrentPageChange?: (num: number) => void;
};

type PaginationState = {
  pageSize: number;
  pageIndex: any[];
  totalPageNumber: number;
  siblingCount: number;
  currentPage: number;
  // nextPage: number;
  // previousPage: number;
  first: number;
  last: number;
};
class Pagination extends React.Component<PaginationProps, PaginationState> {
  static props: { totalItem: any };
  static state: { totalPageNumber: any; currentPage: any; pageSize: any };
  constructor(props: PaginationProps) {
    super(props);
    this.state = {
      pageSize: 5,
      pageIndex: [],
      totalPageNumber: 1,
      siblingCount: 1,
      currentPage: 1,
      // nextPage: 2,
      // previousPage: 0,
      first: 1,
      last: 5,
    };
  }
  componentDidMount() {
    const { totalItem } = this.props;
    const { currentPage, pageSize } = this.state;
    let newPageIndex: (string | number)[] = [];

    const newTotalPageNumber = Math.ceil(totalItem / pageSize);

    if (newTotalPageNumber <= 5) {
      newPageIndex = [1, 2, 3, 4, 5];
      for (let i = 1; i <= newTotalPageNumber; i++) {
        let a = [];
        a.push(i);
        console.log("a", a);
      }
    } else if (currentPage == 1) {
      newPageIndex = [1, 2, "...", newTotalPageNumber - 1, newTotalPageNumber];
    } else if (currentPage == 2) {
      newPageIndex = [
        "...",
        currentPage,
        currentPage + 1,
        currentPage + 2,
        "...",
      ];
    } else if (currentPage >= 3 && currentPage >= newTotalPageNumber - 3) {
      newPageIndex = [
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
      ];
    } else if (currentPage > newTotalPageNumber - 3) {
      newPageIndex = [
        "...",
        newTotalPageNumber - 3,
        newTotalPageNumber - 2,
        newTotalPageNumber - 1,
        newTotalPageNumber,
      ];
    }

    this.setState({
      totalPageNumber: newTotalPageNumber,
      pageIndex: newPageIndex,
    });
  }

  componentDidUpdate(
    prevProps: Readonly<PaginationProps>,
    prevState: Readonly<PaginationState>,
    snapshot?: any
  ): void {
    const { totalItem, onCurrentPageChange } = this.props;
    const { currentPage, pageSize } = this.state;
    let newPageIndex: (string | number)[] = [];

    const newTotalPageNumber = Math.ceil(totalItem / pageSize);

    if (newTotalPageNumber <= 5) {
      for (let i = 1; i <= newTotalPageNumber; i++) {
        newPageIndex.push(i);
      }
    } else if (currentPage == 1) {
      newPageIndex = [1, 2, "...", newTotalPageNumber - 1, newTotalPageNumber];
    } else if (currentPage == 2) {
      newPageIndex = [
        "...",
        currentPage,
        currentPage + 1,
        currentPage + 2,
        "...",
      ];
    } else if (currentPage >= 3 && currentPage <= newTotalPageNumber - 3) {
      newPageIndex = [
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
      ];
    } else if (currentPage > newTotalPageNumber - 3) {
      newPageIndex = [
        "...",
        newTotalPageNumber - 3,
        newTotalPageNumber - 2,
        newTotalPageNumber - 1,
        newTotalPageNumber,
      ];
    }

    if (
      pageSize !== prevState.pageSize ||
      currentPage !== prevState.currentPage
    ) {
      this.setState(
        {
          totalPageNumber: newTotalPageNumber,
          pageIndex: newPageIndex,
          first: pageSize * (currentPage - 1) + 1,
          last: pageSize * currentPage,
        },
        () => onCurrentPageChange?.(currentPage)
      );
    }
  }

  handleChangePageSize = (e: any) => {
    const {
      target: { value },
    } = e;

    const { totalItem, onPageSizeChange } = this.props;
    const { currentPage } = this.state;
    const newTotalPageNumber = Math.ceil(totalItem / value);

    this.setState(
      {
        pageSize: value,
        totalPageNumber: newTotalPageNumber,
        first: value * (currentPage - 1) + 1,
        last: value * currentPage,
      },
      () => onPageSizeChange?.(value)
    );
  };

  /**
   *
   */
  onNext = () => {
    const { currentPage, totalPageNumber } = this.state;
    if (currentPage >= totalPageNumber) {
      this.setState({
        currentPage: totalPageNumber,
      });
    } else {
      this.setState({
        currentPage: currentPage + 1,
      });
    }
  };

  onPrevious = () => {
    const { currentPage } = this.state;
    if (currentPage <= 1) {
      this.setState({
        currentPage: 1,
      });
    } else {
      this.setState({
        currentPage: currentPage - 1,
      });
    }
  };
  handleClickCurrent = (item: number) => {
    this.setState({
      currentPage: item,
    });
  };

  render() {
    return (
      <variables.Consumer>
        {({}) => {
          return (
            <div className="pagination">
              <div className="left-page">
                <span className="text-sm text-color2">
                  {this.state.first} - {this.state.last} of{" "}
                  {this.props.totalItem} results
                </span>
                <div className="dropdown-result">
                  <select name="" id="" onChange={this.handleChangePageSize}>
                    <option className="text-base text-color4">5</option>
                    <option className="text-base text-color4">10</option>
                    <option className="text-base text-color4">20</option>
                    <option className="text-base text-color4">30</option>
                  </select>
                  <span className="text-sm text-color2">Per page</span>
                </div>
              </div>

              <div className="right-page">
                <a className="" href="#" aria-label="">
                  <img src={prevfirst} alt="" />
                </a>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Previous"
                    onClick={this.onPrevious}
                  >
                    <img src={previous} alt="" />
                    <span className="text-base text-color2"> Prev</span>
                  </a>
                </li>
                <div className="pagenumbers">
                  {this.state.pageIndex.map((item) => {
                    return (
                      <button
                        key="11"
                        className="pagenumber"
                        onClick={() => {
                          this.handleClickCurrent(item);
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>

                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Next"
                    onClick={this.onNext}
                  >
                    <span className="text-base text-color2">Next </span>
                    <img src={next} alt="next" />
                  </a>
                </li>
                <a className="" href="#" aria-label="">
                  <img src={nextlast} alt="" />
                </a>
              </div>
            </div>
          );
        }}
      </variables.Consumer>
    );
  }
}

export default Pagination;
