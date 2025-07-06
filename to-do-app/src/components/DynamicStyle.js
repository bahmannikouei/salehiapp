import {useEffect} from 'react';

const DynamicStyle = ({file = "./App.css"}) => {
    useEffect(() => {
        const version = Date.now();
        const link = document.createElement('link');
        link.rel ='stylesheet';
        link.href = `./${file}?ver=${version}aghdas`;
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };

    },[file]);
    return null;
};

export default DynamicStyle;
