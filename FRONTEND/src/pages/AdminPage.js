import React, { Component } from 'react'
import callApi from './../apicall/apiCaller'

class AdminPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        callApi('storys', 'GET', null).then(res => {
            if (res.data) {
                this.setState({
                    data: res.data
                })
            }
        })
    }

    onRender() {
        let result = '';
        if (this.state.data.length > 0) {
            result = this.state.data.map((value, index) => {
                return (
                    <tr >
                        <td>{value.tentruyen}</td>
                        <td>{ value.tacgia} </td>
                        <td> {value.loai.join() }</td>
                        <td><button className="btn btn-danger" style={{ width: '55px', height: '38px' }}>Xóa</button>&nbsp;
                    <button className="btn btn-primary" style={{ width: '55px', height: '38px' }}>Sửa</button>
                        </td>
                    </tr>
                )
            })
        }
        return result
    }

    render() {
        return (
            <div>
                <table className="table table-dark">
                    <thead>
                        <tr>

                            <th scope="col">Tên truyện</th>
                            <th scope="col">Tác giả</th>
                            <th scope="col">Thể loại</th>
                            <th scope="col">Tùy chỉnh</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.onRender()}
                    </tbody>
                </table>
                <button className="btn btn-danger" style={{ width: '70px', height: '38px', marginLeft: '90%' }}>Thêm</button>&nbsp;
          </div>
        )
    }
}


export default AdminPage;