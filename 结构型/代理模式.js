// src/util/requestNew.js

import { post as Post, get as Get } from "./request.js";

let graytype = -1;

const getNewParams = (params) => {
  let newParams = {
    ...params,
  };
  // 将 graytype 加入
  if (graytype !== -1) {
    newParams = {
      ...params,
      headers: {
        ...params.headers,
        graytype,
      },
    };
  }
  return newParams;
};
export const get = async (params) => {
  const response = await Get(getNewParams(params));
  const res = response.data;
  if (res.graytype !== undefined && res.graytype !== null) {
    graytype = res.graytype;
  }
  return response;
};
export const post = async (params) => {
  const response = await Post(getNewParams(params));
  const res = response.data;
  if (res.graytype !== undefined && res.graytype !== null) {
    graytype = res.graytype;
  }
  return response;
};
