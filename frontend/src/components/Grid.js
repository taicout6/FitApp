// import React from "react";
// import axios from "axios";
import styled from "styled-components";
// import { FaTrash, FaEdit } from "react-icons/fa";
// import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ clients }) => {

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th onlyWeb>Email</Th>
          <Th>Fone</Th>
          <Th onlyWeb>Endereço</Th>
          <Th onlyWeb>Plano</Th>
          <Th onlyWeb>Objetivo</Th>
        </Tr>
      </Thead>
      <Tbody>
        {clients.map((item, i) => (
          <Tr key={i}>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>{item.phone}</Td>
            <Td>{item.address}</Td>
            <Td>{item.plan}</Td>
            <Td>{item.goal}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;