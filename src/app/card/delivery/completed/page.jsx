'use client';

import React from 'react';
import CardCharacter from '@/src/ui/Components/card-select/CardCharacter';
import CustomButton from '@/src/ui/Components/atoms/CustomButton';
import Header from '@/src/ui/layout/Header';

const NewComponent = () => {
    return (
      <div className="flex flex-col items-center justify-between h-screen bg-white">
        <Header />
        <div className="flex-grow flex items-center justify-center">
            {/* 배경색 bg-[#57A9FB]에서 bg-MainColor로 추후 변경*/}
            <div className="w-[313px] h-[513px] flex-shrink-0 rounded-[40px] border-2 border-black/40 bg-[#57A9FB] flex items-center justify-center">
            <CardCharacter selectedCharacter="DADAPING" selectedColor="bg-blueDada" />
          </div>
        </div>
        
        <div className="w-full p-4">
          <CustomButton size="large" className="w-full" onClick={() => alert('확인 버튼 클릭')}>
            확인
          </CustomButton>
        </div>
      </div>
    );
  };
  
  export default NewComponent;