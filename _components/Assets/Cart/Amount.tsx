"use client";

import { useState, useEffect, useRef } from "react";

const Amount = ({ amount }: { amount: number | 0 }) => {
  return <p>{amount}</p>;
};

export default Amount;
