package com.kh.giliboim.account.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kh.giliboim.account.model.service.AccountService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@RestController
public class AccountController {

	private final AccountService service;
	
	@GetMapping("/Account/insertMemberCheck")
	public int insertMemberCheck(
			@RequestParam("key") String name,
			@RequestParam("value1") String value			
			) {
		log.info("value={}",value);
		log.info("key={}",name);
		Map<String, String> map = new HashMap<>();
		map.put("key", name);
		map.put("value", value);
		
		return  service.insertMemberCheck(map);
	}
	
}
