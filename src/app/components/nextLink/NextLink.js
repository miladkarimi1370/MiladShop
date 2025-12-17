"use client";

import * as React from "react";
import Link from 'next/link';
import { forwardRef } from "react";

const NextLink = forwardRef((props, ref) => {
    return <Link ref={ref} {...props} />
})
NextLink.displayName = "NextLink"

export default NextLink