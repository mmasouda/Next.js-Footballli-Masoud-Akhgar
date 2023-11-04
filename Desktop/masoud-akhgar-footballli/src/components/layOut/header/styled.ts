"use client";
import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const Container = styled(Box)`
 width: calc(100% - 2rem);
 position: fixed;
 top: 0;
 height: 85px;
 padding: 1.5rem 1rem;
 background-color: #fff;
 z-index: 100;
`;

export const HeaderBox = styled(Box)`
 display: flex;
 justify-content: space-between;
`;

export const SearchBarBox = styled(Box)`
 padding-top: 0.5rem;
 div {
    width: 100%;
    max-width: 500px;
 }
`;

export const SearchBar = styled('input')`
 width: 100%;
 height: 42px;
 background-color: #f0f8ff;
 padding-right: 0.5rem;
 max-width: 500px;
 font-size: 1rem;
 border: 1px solid #ebebeb;
 border-radius: 0.25rem;
`;
