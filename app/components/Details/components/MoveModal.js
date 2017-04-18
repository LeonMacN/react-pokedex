/**
 * Created by leon_ on 4/17/2017.
 */

import React from 'react';
import _  from 'lodash';
import { Row, Col, Modal, Table } from 'react-bootstrap';

class MoveModal extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(){
    this.props.closeAction();
  }
  render(){
    if(!_.isEmpty(this.props.move)){
      var moveDetail = this.props.move.version_group_details.map((movement)=>{
        return <tr><td>{movement.version_group.name}</td><td>{movement.level_learned_at}</td><td>{movement.move_learn_method.name}</td></tr>
      });
      return(
        <Modal show={this.props.moveModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.move.move.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped>
              <thead>
                <tr>
                  <th>Version group</th>
                  <th>Level learned at</th>
                  <th>Move learn method</th>
                </tr>
              </thead>
              <tbody>
                {moveDetail}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      );
    } else {
      return (<div></div>);
    }
  }
}

MoveModal.propTypes = {

};

export default MoveModal;

