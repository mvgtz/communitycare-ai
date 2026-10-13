'use client';
import { createContext,useContext,useState } from 'react';
import { Encounter,seedEncounters,competencies } from '@/lib/data';
type State={records:Encounter[];save:(r:Encounter)=>void;update:(r:Encounter)=>void;reset:()=>void;checklist:string[];toggle:(s:string)=>void;notice:string;announce:(s:string)=>void};
const Context=createContext<State|null>(null);
export function AppProvider({children}:{children:React.ReactNode}){const [records,setRecords]=useState(seedEncounters);const [checklist,setChecklist]=useState(competencies.slice(0,9));const [notice,announce]=useState('');function save(r:Encounter){setRecords(prev=>[r,...prev.filter(x=>x.id!==r.id)]);announce('Synthetic encounter saved. Dashboard updated.');}function update(r:Encounter){setRecords(prev=>prev.map(x=>x.id===r.id?r:x));announce('Simulated encounter updated.');}function reset(){setRecords(seedEncounters);setChecklist(competencies.slice(0,9));announce('Demo data and learning checklist reset.');}function toggle(s:string){setChecklist(p=>p.includes(s)?p.filter(x=>x!==s):[...p,s]);}return <Context.Provider value={{records,save,update,reset,checklist,toggle,notice,announce}}>{children}</Context.Provider>;}
export function useApp(){const c=useContext(Context);if(!c)throw new Error('AppProvider is required');return c;}
