import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import Button from "@/app/(dashboard)/components/ButtonIcon";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { userProfileData } from "@/constants/data";
import { useStateContext } from "../contexts/ContextProvider";
import Image from "next/image";
import { useAuth } from "../hooks/useAuth";

import styles from "@/styles/image.module.css";
import { useUpload } from "../hooks/useUpload";
import { uploadUserPhoto } from "../api/user/api.user";

const Profile = () => {
  const { currentColor } = useStateContext();
  const { isLogoutLoading, logoutUser, user } = useAuth();
  const { handleFileSelect, prevImageUrl } = useUpload({ uploadFunc: uploadUserPhoto });
  const { firstName, lastName, email, type, futureId, profilePhoto } = user;

  return (
    <div className='nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96'>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-lg dark:text-gray-200'>User Profile</p>
        <Button icon={<MdOutlineCancel />} color='rgb(153, 171, 180)' bgHoverColor='light-gray' size='2xl' borderRadius='50%' />
      </div>
      <div className='flex gap-5 items-center mt-6 border-color border-b-1 pb-6'>
        {/* {!profilePhoto ? <Image className='rounded-full h-24 w-24' src={avatar} alt='user-profile' /> : <div className='flex items-center justify-center rounded-full h-24 w-24 font-semibold text-xl'>{getInitials()}</div>} */}
        <div className={styles.container}>
          <Image className={`rounded-full h-24 w-24 ${styles.image}`} src={prevImageUrl || profilePhoto} height={100} width={100} alt='user-profile' />
          <div className={styles.middle}>
            <label htmlFor='file'>
              <div className='upload-icon'>
                <AddAPhotoIcon className='cursor-pointer' />
              </div>
              <input type='file' id='file' onChange={(e) => handleFileSelect(e)} style={{ display: "none" }} accept='image/gif,image/jpeg,image/jpg,image/png' />
            </label>
          </div>
        </div>
        <div>
          <p className='font-semibold text-xl dark:text-gray-200'>
            {firstName} {lastName}
          </p>
          <p className='text-gray-500 text-sm dark:text-gray-400'>
            {type} - {futureId}
          </p>
          <p className='text-gray-500 text-sm font-semibold dark:text-gray-400'> {email} </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className='flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]'>
            <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg }} className=' text-xl rounded-lg p-3 hover:bg-light-gray'>
              {item.icon}
            </button>
            <div>
              <p className='font-semibold dark:text-gray-200 '>{item.title}</p>
              <p className='text-gray-500 text-sm dark:text-gray-400'> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-5'>
        <Button onClick={() => logoutUser()} color='white' bgColor={currentColor} text='Logout' borderRadius='10px' width='full' disabled={isLogoutLoading} />
      </div>
    </div>
  );
};

export default Profile;
