package com.itsolution.service;

import java.util.List;

import com.itsolution.dto.EmployeeDTO;
import com.itsolution.entity.Employee;
import com.itsolution.exception.ITSolutionException;

public interface EmployeeService {
	 	Integer addEmployee(EmployeeDTO customerDTO) throws ITSolutionException;
	    List<EmployeeDTO> getAllEmployees() throws ITSolutionException;
	    EmployeeDTO getEmployeeById(Integer id) throws ITSolutionException;
	    List<Employee> searchEmployeeRole(String name)throws ITSolutionException;
	    String deleteEmployee(Integer id) throws ITSolutionException;
		String updateEmployee(EmployeeDTO customerDTO) throws ITSolutionException;
	    List<EmployeeDTO> findByAgeAndRole(int minAge,int maxAge,String role); 
}
