/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.xm.mapper;

import java.util.List;
import java.util.Map;
import com.xm.pojo.Account;

/**
 *
 * @author chnewei
 */
public interface AccountMapper {
    //查看某时间段消费列表
    public  List<Account> selectAccountByDate(Map map);   
    //查看按日统计消费列表
    public  List<Map> selectAccountByDay(Map map);
    //查看按月统计消费列表
    public  List<Map> selectAccountByMonth();   
    //查看按年统计消费列表
    public  List<Map> selectAccountByYear();   
    //增加消费
    public Integer saveAccount(Account account);
    //删除消费 
    public Integer removeAccount(Integer id);
    //修改消费
    public Integer modifyAccount(Account account);

}
