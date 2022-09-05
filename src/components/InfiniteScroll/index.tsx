import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";

interface Props {
  loadMore: any;
}
const InfiniteScroll: FC<Props> = ({ loadMore }: Props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        loadMore(false);
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  }, []); //eslint-disable-line

  return <EmptyDiv ref={containerRef} >a</EmptyDiv>;
};

export default InfiniteScroll;


const EmptyDiv = styled.div`

opacity:0;
`
