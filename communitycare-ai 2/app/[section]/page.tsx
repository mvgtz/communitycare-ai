import { Workspace } from '@/components/workspace';
export function generateStaticParams(){return ['screening','records','resources','learning','impact','about','demo','privacy'].map(section=>({section}));}
export default async function Page({params}:{params:Promise<{section:string}>}){const {section}=await params;return <Workspace section={section}/>;}
