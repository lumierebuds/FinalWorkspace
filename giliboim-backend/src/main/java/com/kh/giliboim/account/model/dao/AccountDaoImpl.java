package com.kh.giliboim.account.model.dao;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AccountDaoImpl implements AccountDao{

	private final SqlSessionTemplate session;

	@Override
	public int insertMemberCheck(Map<String, String> map) {
		return session.selectOne("account.insertMemberCheck",map);
	}
}
