import React from "react";
import "frappe-gantt/dist/frappe-gantt.css";
import Gantt from "frappe-gantt";
// import {FrappeGantt, Task, ViewMode} from "frappe-gantt-react";



export default class extends React.Component {
  // constructor(props) {
  //     super(props);
  //
  //     this.state = {mode: ViewMode.HalfDay};
  //
  //     // setTimeout(() => {
  //     //     console.log("Setting State!");
  //     //     this.setState({mode: ViewMode.Month});
  //     // }, 3000);
  // }

  getTask(){

  }

  componentDidMount() {
    let tasks = [
      {
        id: 'Task 1',
        name: 'Redesign website',
        start: '2016-12-28',
        end: '2016-12-31',
        progress: 20,
        dependencies: 'Task 2, Task 3'
      },
      {
        id: 'Task 2',
        name: 'Redesign website',
        start: '2016-12-31',
        end: '2017-01-02',
        progress: 20
      },
      {
        id: 'Task 3',
        name: 'Redesign website',
        start: '2017-01-02',
        end: '2017-01-06',
        progress: 20
      }, {
        id: 'Task 4',
        name: 'Redesign website',
        start: '2017-01-07',
        end: '2017-01-15',
        progress: 20,
        dependencies: 'Task 2, Task 3'
      }
    ];
    // eslint-disable-next-line no-undef
    new Gantt("#gantt", tasks, {
      header_height: 50,
      column_width: 30,
      step: 24,
      view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
      bar_height: 20,
      bar_corner_radius: 3,
      arrow_curve: 5,
      padding: 18,
      view_mode: 'Day',
      date_format: 'YYYY-MM-DD',
      custom_popup_html: null
    })
  }

  // render() {
  //     return (
  //         <div>
  //             <FrappeGantt tasks={tasks} viewMode={this.state.mode} />
  //         </div>
  //     )
  // }
  //      {/*<svg id="gantt">*/}
  //     {/*</svg>*/}

  render() {
    return (
      <p>hello</p>
    )
  }
}
