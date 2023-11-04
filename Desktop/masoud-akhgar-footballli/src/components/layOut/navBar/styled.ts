"use client";
import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const Container = styled(Box)`
 width: 100%;
 height: 70px;
 display: flex;
 position: fixed;
 bottom: 0;
 background-color: #fff;
 border-top: 1px solid #ebebeb;
 z-index: 100;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    li {
        display: inline-block;
        cursor: pointer;
    }
  }
`;
