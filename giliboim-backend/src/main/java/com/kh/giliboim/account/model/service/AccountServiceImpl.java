package com.kh.giliboim.account.model.service;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.kh.giliboim.account.model.dao.AccountDao;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

	private final AccountDao dao;

	@Override
	public int insertMemberCheck(Map<String, String> map) {
		return dao.insertMemberCheck(map);
	}
	
}
