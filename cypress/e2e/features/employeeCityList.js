import employeeTablePage from '../pages/employeeTablePage';
import employeeCityListPage from '../pages/employeeCityListPage';

describe('Employee City List',() => {
  it('View data from a single selected employee', () => {
    employeeTablePage.selectRowByNameSurname("Andrew","Fuller")  
    employeeCityListPage.clickViewSelectedDataButton()
    
    employeeCityListPage.validateListEntries(["Andrew is from Tacoma"])
  })

  it('Display "No city defined for employee <EmpLN>, <EmpFN>" when viewing data for employees with no city defined', () => {
    employeeTablePage.expandRowByNameSurname("Steven","Buchanan")
    employeeTablePage.selectRowByNameSurname("Anne","Dodsworth")  
    employeeCityListPage.clickViewSelectedDataButton()
    
    // This assert will fail on purpose, since I am checking for what I think the output should be...
    // Current implementation will return "Anne is from null"
    employeeCityListPage.validateListEntries(["No city defined for employee Anne, Dodsworth"])
  })

  it('View selected data for multiple employees at different tree levels', () => {
    employeeTablePage.selectRowByNameSurname("Andrew","Fuller")
    employeeTablePage.selectRowByNameSurname("Janet","Leverling")
    employeeTablePage.expandRowByNameSurname("Steven","Buchanan") 
    employeeTablePage.selectRowByNameSurname("Robert","King")   
    employeeCityListPage.clickViewSelectedDataButton()
    
    employeeCityListPage.validateListEntries(["Andrew is from Tacoma", "Janet is from Kirkland", "Robert is from London"])
  })

  it('List is hidden when page loads', () => {
    employeeCityListPage.validateListIsVisible(false)  
  })
})