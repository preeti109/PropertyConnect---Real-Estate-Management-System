package com.app.userservice.service;

import com.app.userservice.entity.Address;
import com.app.userservice.entity.UserProfile;

import java.util.List;

public interface UserService {

    UserProfile createOrUpdateProfile(UserProfile profile);

    UserProfile getProfileByUserId(Long userId);

    Address addAddress(Address address);

    List<Address> getAddresses(Long userId);
}
