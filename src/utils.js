export const loading = (component, isLoading) => {
    component.setState({loading: isLoading || false});
};