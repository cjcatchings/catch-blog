'use client'
import MainHeader from '@/components/header/mainHeader'
import IntroText from './texts/IntroText'
import CurriculumViate from './texts/cv/curriculumVitae'
import DefaultTabSet from '@/components/tab/defaultTabSet'
import * as React from 'react';

export default function Home() {

  const [tabs, setTabs] = React.useState([
    {tabId: 1, title: 'Intro', selected: true, content: <IntroText />},
    {tabId: 2, title: 'Résumé/CV', selected: false, content: <CurriculumViate /> }
  ]);

  /* I did not observe material performance benefit from using React.useCallback
    here so I removed it.
  */
  const onTabClick = (e, clickedTabId) => {
    e.preventDefault();
    const updatedTabs = tabs.map(t => {
        if(t.tabId === clickedTabId){
            t.selected = true;
        }else{
            t.selected = false;
        }
        return t;
    })
    setTabs(updatedTabs)
  };

  const getMainContent = () => {
    const selectedTab = tabs.find(t => t.selected)
    if(selectedTab === null){
      return <></>
    }
    return selectedTab.content
  }

  return (
    <>
      <MainHeader/>
      <DefaultTabSet tabs={tabs} onTabClick={onTabClick} />
      <main className="flex mx-5 min-h-screen flex-col items-center justify-between">
        <div className="flex flex-wrap items-center justify-between bg-blue-300 dark:bg-blue-500
           h-full pt-5 pb-5 rounded-2xl shadow-black shadow-md w-full">
          <div className="w-1/12"></div>
          <div className="w-10/12 h-full whitespace-pre-wrap">
            {getMainContent()}
          </div>
          <div className="w-1/12"></div>
        </div>
      </main>
    </>
  )
}
