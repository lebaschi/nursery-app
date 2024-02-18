"use client"
import React, { useState, useEffect, useRef } from 'react';
import { fetchAllChildrenData } from '../../utils/api'; 
import styles from './page.module.css';
import ChildList from '../../components/childList'; 

const PAGE_SIZE = 10; 

export default function Home() {
    const [allChildren, setAllChildren] = useState([]);
    const [displayedChildren, setDisplayedChildren] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const loaderRef = useRef(null);

    useEffect(() => {
      const loadAllChildren = async () => {
          const data = await fetchAllChildrenData(); 
          setAllChildren(data || []);
          setDisplayedChildren(data.slice(0, PAGE_SIZE));
      };
  
      loadAllChildren();
  }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                const nextPage = currentPage + 1;
                const nextChildren = allChildren.slice(currentPage * PAGE_SIZE, nextPage * PAGE_SIZE);
                if (nextChildren.length > 0) {
                    setDisplayedChildren(prevChildren => [...prevChildren, ...nextChildren]);
                    setCurrentPage(nextPage);
                }
            }
        }, { threshold: 1.0 });

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => observer.disconnect();
    }, [allChildren, currentPage]);

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Nursery Management Application</h1>
            <ChildList children={displayedChildren} accessToken={process.env.REACT_APP_ACCESS_TOKEN} />
            <div ref={loaderRef} style={{ height: '20px', visibility: 'hidden' }}></div>
        </main>
    );
}